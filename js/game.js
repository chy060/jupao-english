/**
 * 游戏引擎 GameEngine —— 管理血量、金币、进度、复活逻辑
 * 独立于 UI，纯状态机
 *
 * 两种模式：
 *   chapter  章节模式（有 NOVEL_CHAPTERS 数据的版本）：答题 → 推进章节进度 → 解锁下一章
 *   word     词汇模式（暂无章节数据的版本）：200 词乱序 → 答题 → 解锁小说分段
 */
window.GameEngine = (function() {
  const MAX_HP = 100;
  const WRONG_HP_LOSS = 1;        // 词汇模式：答错扣 1 点血
  const CORRECT_COINS = 10;       // 答对奖励 10 金币
  const REVIVE_COST = 100;        // 复活消耗 100 金币
  const CHAPTER_HEAL = 5;         // 章节模式：答对回 5 点血
  const CHAPTER_WRONG_LOSS = 10;  // 章节模式：答错扣 10 点血

  let state = null;

  /** 写一次存档（进度变化后自动调用，刷新页面不会丢） */
  function persist() {
    if (window.Store && state) window.Store.saveGame(serialize());
  }

  function hasChapters(versionId) {
    const list = window.NOVEL_CHAPTERS && window.NOVEL_CHAPTERS[versionId];
    return !!(list && list.length > 0);
  }

  /** 找出这道题考的目标词在词库里的条目 */
  function targetWordOf(q) {
    if (!q) return null;
    if (q.word && q.word.id) return q.word;   // 词汇模式直接带 word
    const bank = window.WORD_BANK || [];
    const m = String(q.prompt || "").match(/'([^']+)'/);
    if (!m) return null;
    const raw = m[1].toLowerCase();
    const firstRaw = raw.split(/\s+/)[0];
    let hit = bank.find(w => w.word.toLowerCase() === raw);
    if (!hit) hit = bank.find(w => w.word.toLowerCase().split(/\s+/)[0] === firstRaw);
    return hit || null;
  }

  /** 记入单词本（跨剧本共用一本） */
  function recordWord(q, isCorrect) {
    const w = targetWordOf(q);
    if (w && window.Store && window.Store.recordWordStat) {
      window.Store.recordWordStat(w.id, isCorrect);
    }
  }

  /** 初始化新游戏 */
  function init(versionId) {
    const version = window.getVersion(versionId);
    if (!version) return null;
    if (hasChapters(versionId)) {
      const chapterState = initChapterMode(version);
      persist();
      return chapterState;
    }

    // Fisher-Yates 打乱 200 个词
    const shuffledWords = window.fisherYatesShuffle(window.WORD_BANK);

    state = {
      mode: 'word',
      version: version,
      shuffledWords: shuffledWords,
      currentIndex: 0,
      hp: MAX_HP,
      coins: 0,
      correctCount: 0,
      answeredIds: new Set(),
      lastWrongIndex: null,
      isDead: false,
      currentQuestion: null
    };
    persist();
    return state;
  }

  /** 章节模式初始化 */
  function initChapterMode(version) {
    state = {
      mode: 'chapter',
      version: version,
      chapters: window.NOVEL_CHAPTERS[version.id],
      chapterIndex: 0,
      questionIndex: 0,
      hp: MAX_HP,
      coins: 0,
      correctCount: 0,
      chapterCorrect: 0,
      cleared: {},        // chapterIndex -> true
      results: {},        // `${chapterIndex}-${questionIndex}` -> true/false
      lastWrong: null,    // { chapterIndex, questionIndex }
      chapterDone: false,
      chapterPassed: false,
      isDead: false,
      currentQuestion: null
    };
    return state;
  }

  function getState() {
    return state;
  }

  // ==================== 章节模式 ====================

  function getChapter() {
    return state.chapters[state.chapterIndex] || null;
  }

  function isChapterUnlocked(index) {
    if (!state || state.mode !== 'chapter') return false;
    if (index === 0) return true;
    return !!state.cleared[index - 1];
  }

  function getChapterQuestion() {
    const ch = getChapter();
    if (!ch) return null;
    const q = ch.questions[state.questionIndex];
    if (!q) return null;
    const question = {
      mode: 'chapter',
      version: state.version,
      chapter: ch,
      question: q,
      chapterIndex: state.chapterIndex,
      questionIndex: state.questionIndex,
      totalQuestions: ch.questions.length,
      speaker: q.speaker || ch.speaker,
      storyText: ch.storyText
    };
    state.currentQuestion = question;
    return question;
  }

  function answerChapter(optionIndex) {
    const ch = getChapter();
    const q = ch.questions[state.questionIndex];
    const selected = q.options[optionIndex];
    const isCorrect = !!(selected && selected.correct);
    const key = `${state.chapterIndex}-${state.questionIndex}`;

    state.results[key] = isCorrect;
    recordWord(q, isCorrect);

    if (isCorrect) {
      state.coins += CORRECT_COINS;
      state.correctCount += 1;
      state.chapterCorrect += 1;
      state.hp = Math.min(MAX_HP, state.hp + CHAPTER_HEAL);
      state.lastWrong = null;
    } else {
      state.hp = Math.max(0, state.hp - CHAPTER_WRONG_LOSS);
      state.lastWrong = { chapterIndex: state.chapterIndex, questionIndex: state.questionIndex };
      if (state.hp <= 0) {
        state.hp = 0;
        state.isDead = true;
      }
    }

    state.questionIndex += 1;

    let chapterDone = false;
    let chapterPassed = false;
    if (state.questionIndex >= ch.questions.length) {
      chapterDone = true;
      chapterPassed = state.chapterCorrect >= Math.ceil(ch.questions.length * 0.75);
      state.chapterDone = chapterDone;
      state.chapterPassed = chapterPassed;
      if (chapterPassed) state.cleared[state.chapterIndex] = true;
    }

    persist();
    return {
      isCorrect,
      selected: selected,
      question: q,
      chapter: ch,
      chapterDone,
      chapterPassed,
      hp: state.hp,
      coins: state.coins
    };
  }

  /** 进入下一章（仅在本章通过且存在下一章时） */
  function nextChapter() {
    if (!state || state.mode !== 'chapter') return false;
    if (!state.cleared[state.chapterIndex]) return false;
    if (state.chapterIndex + 1 >= state.chapters.length) return false;
    state.chapterIndex += 1;
    state.questionIndex = 0;
    state.chapterCorrect = 0;
    state.chapterDone = false;
    state.chapterPassed = false;
    persist();
    return true;
  }

  /** 重玩本章 */
  function retryChapter() {
    if (!state || state.mode !== 'chapter') return false;
    state.questionIndex = 0;
    state.chapterCorrect = 0;
    state.chapterDone = false;
    state.chapterPassed = false;
    persist();
    return true;
  }

  /** 切换到某个已解锁章节 */
  function goChapter(index) {
    if (!state || state.mode !== 'chapter') return false;
    if (!isChapterUnlocked(index)) return false;
    state.chapterIndex = index;
    state.questionIndex = 0;
    state.chapterCorrect = 0;
    state.chapterDone = false;
    state.chapterPassed = false;
    persist();
    return true;
  }

  /** 章节列表进度（给 UI 用） */
  function getChapterList() {
    if (!state || state.mode !== 'chapter') return [];
    return state.chapters.map((ch, i) => ({
      id: ch.id,
      index: i,
      title: ch.title,
      novel: ch.novel,
      total: ch.questions.length,
      unlocked: isChapterUnlocked(i),
      cleared: !!state.cleared[i],
      correct: i === state.chapterIndex ? state.chapterCorrect : (state.cleared[i] ? ch.questions.length : 0)
    }));
  }

  // ==================== 词汇模式（原逻辑） ====================

  function getWordQuestion() {
    const word = state.shuffledWords[state.currentIndex];
    if (!word) return null;
    const q = window.QuestionGenerator.generate(word, state.version);
    state.currentQuestion = q;
    return q;
  }

  function answerWord(optionIndex) {
    const q = state.currentQuestion;
    if (!q) return null;

    const selected = q.options[optionIndex];
    const isCorrect = selected && selected.correct;
    recordWord(q, !!isCorrect);

    if (isCorrect) {
      state.coins += CORRECT_COINS;
      state.correctCount += 1;
      state.answeredIds.add(q.word.id);
      state.lastWrongIndex = null;
      state.currentIndex += 1;
    } else {
      state.hp -= WRONG_HP_LOSS;
      state.lastWrongIndex = state.currentIndex;
      state.currentIndex += 1;
      if (state.hp <= 0) {
        state.hp = 0;
        state.isDead = true;
      }
    }

    persist();
    return { isCorrect, word: q.word, explanation: q.explanation, hp: state.hp, coins: state.coins };
  }

  // ==================== 公共接口 ====================

  function getCurrentQuestion() {
    if (!state || state.isDead) return null;
    return state.mode === 'chapter' ? getChapterQuestion() : getWordQuestion();
  }

  function answer(optionIndex) {
    if (!state || state.isDead) return null;
    if (!state.currentQuestion) return null;
    return state.mode === 'chapter' ? answerChapter(optionIndex) : answerWord(optionIndex);
  }

  /** 复活：花费 100 金币，从答错的那题重新开始，血量回满 */
  function revive() {
    if (!state || !state.isDead) return false;
    if (state.coins < REVIVE_COST) return false;

    state.coins -= REVIVE_COST;
    state.hp = MAX_HP;
    state.isDead = false;

    if (state.mode === 'chapter') {
      if (state.lastWrong && state.lastWrong.chapterIndex === state.chapterIndex) {
        state.questionIndex = state.lastWrong.questionIndex;
        delete state.results[`${state.lastWrong.chapterIndex}-${state.lastWrong.questionIndex}`];
        state.chapterDone = false;
        state.chapterPassed = false;
      }
    } else if (state.lastWrongIndex !== null) {
      state.currentIndex = state.lastWrongIndex;
    }
    persist();
    return true;
  }

  /** 游戏是否结束 */
  function isFinished() {
    if (!state) return false;
    if (state.mode === 'chapter') {
      const last = state.chapters.length - 1;
      return last === state.chapterIndex && state.chapterDone && state.chapterPassed;
    }
    return state.currentIndex >= state.shuffledWords.length;
  }

  /**
   * 奖励小说解锁进度（章节模式）
   * 按原著章节划分：把本章题目平均分给全部章节，答对一题推进 1/N 章，两本同步推进。
   */
  function getRewardProgress() {
    if (!state || state.mode !== 'chapter') return [];
    const override = window.REWARD_NOVELS && window.REWARD_NOVELS[state.version.id];
    const rewards = override && override.length
      ? override
      : (window.NOVELS[state.version.id] || []).filter(n => n.role === 'reward');
    const totalQ = state.chapters.reduce((s, c) => s + c.questions.length, 0) || 1;
    const correct = Math.max(0, state.correctCount);
    return rewards.map(n => {
      const chapters = n.chapters && n.chapters.length
        ? n.chapters
        : (n.segments || []).map((text, i) => ({ title: `第 ${i + 1} 章`, text }));
      const total = chapters.length;
      const unlockedChapters = total
        ? Math.min(total, Math.ceil((total * correct) / totalQ))
        : 0;
      return {
        ...n,
        chapters,
        totalChapters: total,
        unlockedChapters,
        unlockedSegments: unlockedChapters,
        percent: total ? Math.round((unlockedChapters / total) * 100) : 0
      };
    });
  }

  /** 小说解锁进度（词汇模式） */
  function getNovelProgress() {
    if (!state || state.mode === 'chapter') return null;
    const all = window.NOVELS[state.version.id] || [];
    const novels = all.filter(n => n.role === 'reward');
    if (novels.length === 0) return null;

    const total = state.shuffledWords.length;
    const half = Math.floor(total / 2);
    const answered = Math.min(state.currentIndex, total);

    function build(novel, answeredInHalf) {
      if (!novel) return null;
      const segments = novel.chapters ? novel.chapters.length : (novel.segments || []).length;
      const answersPerSegment = half / segments;
      const unlockedSegments = Math.min(
        Math.floor(answeredInHalf / answersPerSegment),
        segments
      );
      const percent = Math.min(Math.round((answeredInHalf / half) * 100), 100);
      return { ...novel, unlockedSegments, percent };
    }

    return {
      novel1: build(novels[0], Math.min(answered, half)),
      novel2: build(novels[1], Math.max(answered - half, 0))
    };
  }

  /** 总进度 */
  function getProgress() {
    if (!state) return { current: 0, total: 200, percent: 0 };
    if (state.mode === 'chapter') {
      const ch = getChapter();
      const chapterQTotal = ch ? ch.questions.length : 0;
      const total = state.chapters.reduce((s, c) => s + c.questions.length, 0);
      let current = 0;
      for (let i = 0; i < state.chapterIndex; i++) current += state.chapters[i].questions.length;
      current += Math.min(state.questionIndex, chapterQTotal);
      return {
        current,
        total,
        percent: total ? Math.round((current / total) * 100) : 0,
        chapterCurrent: state.chapterIndex + 1,
        chapterTotal: state.chapters.length,
        chapterQ: Math.min(state.questionIndex, chapterQTotal),
        chapterQTotal
      };
    }
    const total = state.shuffledWords.length;
    const current = Math.min(state.currentIndex, total);
    return { current, total, percent: Math.round((current / total) * 100) };
  }

  // ==================== 存档 / 恢复 ====================

  /** 把当前状态压成可 JSON 化的快照 */
  function serialize() {
    if (!state) return null;
    const snap = {
      versionId: state.version.id,
      mode: state.mode,
      hp: state.hp,
      coins: state.coins,
      correctCount: state.correctCount,
      isDead: state.isDead
    };

    if (state.mode === 'chapter') {
      snap.chapterIndex = state.chapterIndex;
      snap.questionIndex = state.questionIndex;
      snap.chapterCorrect = state.chapterCorrect;
      snap.chapterDone = state.chapterDone;
      snap.chapterPassed = state.chapterPassed;
      snap.cleared = Object.assign({}, state.cleared);
      snap.results = Object.assign({}, state.results);
      snap.lastWrong = state.lastWrong;
    } else {
      snap.wordIds = state.shuffledWords.map(w => w.id);
      snap.currentIndex = state.currentIndex;
      snap.answeredIds = Array.from(state.answeredIds);
      snap.lastWrongIndex = state.lastWrongIndex;
    }

    return snap;
  }

  /** 从快照恢复整局游戏，成功返回 true */
  function restore(snap) {
    if (!snap || !snap.versionId) return false;
    const version = window.getVersion(snap.versionId);
    if (!version) return false;

    if (snap.mode === 'chapter') {
      if (!hasChapters(snap.versionId)) return false;
      initChapterMode(version);

      const list = state.chapters;
      state.chapterIndex = Math.min(Math.max(snap.chapterIndex || 0, 0), list.length - 1);
      const ch = list[state.chapterIndex];
      state.questionIndex = Math.min(Math.max(snap.questionIndex || 0, 0), ch.questions.length);
      state.chapterCorrect = Math.max(0, snap.chapterCorrect || 0);
      state.chapterDone = !!snap.chapterDone || state.questionIndex >= ch.questions.length;
      state.chapterPassed = !!snap.chapterPassed;
      state.cleared = snap.cleared || {};
      state.results = snap.results || {};
      state.lastWrong = snap.lastWrong || null;
    } else {
      const bank = window.WORD_BANK || [];
      const byId = {};
      bank.forEach(w => { byId[w.id] = w; });

      const words = (snap.wordIds || []).map(id => byId[id]).filter(Boolean);
      if (words.length !== bank.length) return false;

      state = {
        mode: 'word',
        version: version,
        shuffledWords: words,
        currentIndex: Math.min(Math.max(snap.currentIndex || 0, 0), words.length),
        hp: MAX_HP,
        coins: 0,
        correctCount: 0,
        answeredIds: new Set(Array.isArray(snap.answeredIds) ? snap.answeredIds : []),
        lastWrongIndex: typeof snap.lastWrongIndex === 'number' ? snap.lastWrongIndex : null,
        isDead: false,
        currentQuestion: null
      };
    }

    state.hp = Math.min(MAX_HP, Math.max(0, typeof snap.hp === 'number' ? snap.hp : MAX_HP));
    state.coins = Math.max(0, snap.coins || 0);
    state.correctCount = Math.max(0, snap.correctCount || 0);
    state.isDead = !!snap.isDead;
    state.currentQuestion = null;
    return true;
  }

  /** 清空内存中的游戏并删除存档 */
  function reset() {
    state = null;
    if (window.Store) window.Store.clearGame();
  }

  return {
    init,
    getState,
    getCurrentQuestion,
    answer,
    revive,
    isFinished,
    getNovelProgress,
    getRewardProgress,
    getProgress,
    serialize,
    restore,
    reset,
    // 章节模式
    isChapterUnlocked,
    getChapterList,
    nextChapter,
    retryChapter,
    goChapter,
    MAX_HP,
    WRONG_HP_LOSS,
    CORRECT_COINS,
    REVIVE_COST,
    CHAPTER_HEAL,
    CHAPTER_WRONG_LOSS
  };
})();
