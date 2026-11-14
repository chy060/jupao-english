/**
 * UI 控制器 —— 负责所有页面渲染与交互
 * 依赖: GameEngine, QuestionGenerator, TTS, VERSIONS, WORD_BANK, TEMPLATES, NOVELS
 */
(function() {
  const app = document.getElementById('app');

  // ========== 通用工具 ==========
  function el(html) {
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstChild;
  }

  function hpColor(hp) {
    if (hp > 50) return '#4caf50';
    if (hp > 20) return '#ff9800';
    return '#f44336';
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  /** 是否在 App 内嵌浏览器里打开（这类内核常静音网页音频，且多半没有系统语音） */
  function isInAppWebView() {
    const ua = navigator.userAgent || '';
    return /\bwv\b/.test(ua) || /MicroMessenger|QQ\/|aweme|BytedanceWebview|Weibo/i.test(ua);
  }

  // ========== 个人资料：可选头像 ==========
  const AVATAR_CHOICES = [
    { id: 'oliver', type: 'img', url: 'assets/avatars/anime_oliver.jpg', label: '泳池少年' },
    { id: 'female_lead', type: 'img', url: 'assets/avatars/anime_female_lead.jpg', label: '红西装' },
    { id: 'male_lead', type: 'img', url: 'assets/avatars/anime_male_lead.jpg', label: '火星' },
    { id: 'dual_female', type: 'img', url: 'assets/avatars/anime_dual_female.jpg', label: '紫调' },
    { id: 'pure_love', type: 'img', url: 'assets/avatars/anime_pure_love.jpg', label: '暖光' },
    { id: 'moon', type: 'emoji', emoji: '🌙', bg: 'linear-gradient(135deg,#f59e0b,#ef4444)', label: '月亮' },
    { id: 'flower', type: 'emoji', emoji: '🌸', bg: 'linear-gradient(135deg,#a855f7,#f472b6)', label: '双生花' },
    { id: 'cat', type: 'emoji', emoji: '🐱', bg: 'linear-gradient(135deg,#22d3ee,#4a7cff)', label: '猫系' }
  ];

  function getAvatarChoice(id) {
    if (id === 'custom') {
      const p = window.Store ? window.Store.loadProfile() : null;
      if (p && p.customAvatar) return { id: 'custom', type: 'img', url: p.customAvatar, label: '我的' };
      return AVATAR_CHOICES[0];
    }
    return AVATAR_CHOICES.find(a => a.id === id) || AVATAR_CHOICES[0];
  }

  /** 把用户上传的图片居中裁成正方形并压缩，避免 base64 撑爆本地存储 */
  function shrinkImage(src, size) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const side = Math.min(img.width, img.height);
          const sx = (img.width - side) / 2;
          const sy = (img.height - side) / 2;
          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;
          canvas.getContext('2d').drawImage(img, sx, sy, side, side, 0, 0, size, size);
          resolve(canvas.toDataURL('image/jpeg', 0.82));
        } catch (e) {
          resolve(src);
        }
      };
      img.onerror = () => resolve(src);
      img.src = src;
    });
  }

  function avatarHTML(av, extraClass) {
    const cls = 'avatar' + (extraClass ? ' ' + extraClass : '');
    if (av.type === 'img') {
      return `<div class="${cls} avatar-photo"><img src="${av.url}" alt=""></div>`;
    }
    return `<div class="${cls}" style="background:${av.bg}"><span class="avatar-emoji">${av.emoji}</span></div>`;
  }

  function formatTime(ts) {
    if (!ts) return '未知';
    const d = new Date(ts);
    const pad = n => String(n).padStart(2, '0');
    return `${d.getMonth() + 1}月${d.getDate()}日 ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  /** 确认弹窗：只有点「确认」才执行 onOk */
  function confirmDialog(opts) {
    const modal = el(`
      <div class="modal-overlay">
        <div class="modal">
          <div class="modal-title">${opts.title}</div>
          <div class="modal-body">${opts.text}</div>
          <div class="modal-actions">
            <button class="modal-btn ghost" data-act="cancel">取消</button>
            <button class="modal-btn danger" data-act="ok">${opts.okText || '确认'}</button>
          </div>
        </div>
      </div>
    `);
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      const act = e.target.dataset ? e.target.dataset.act : null;
      if (act === 'cancel' || e.target === modal) modal.remove();
      if (act === 'ok') {
        modal.remove();
        if (opts.onOk) opts.onOk();
      }
    });
  }

  function hasSaveProgress(save) {
    if (!save) return false;
    if (save.mode === 'chapter') {
      return (save.chapterIndex || 0) > 0 || (save.questionIndex || 0) > 0 ||
        (save.coins || 0) > 0 || !!save.isDead;
    }
    return (save.currentIndex || 0) > 0 || (save.coins || 0) > 0 || !!save.isDead;
  }

  function saveSummary(save) {
    if (!save) return '';
    const version = window.getVersion(save.versionId);
    const list = window.NOVEL_CHAPTERS && window.NOVEL_CHAPTERS[save.versionId];
    const ch = list && list[save.chapterIndex || 0];
    if (!version) return '';
    if (ch) {
      return `${version.name} · ${ch.title} · ${save.chapterDone ? '本章已完成' : '第 ' + ((save.questionIndex || 0) + 1) + ' 题'}`;
    }
    return `${version.name} · 词汇模式 · 第 ${(save.currentIndex || 0) + 1} 题`;
  }

  /** 版本卡上的进度小标签 */
  function saveTag(save) {
    if (!save) return '';
    if (save.mode === 'chapter') {
      return save.chapterDone ? '💾 本章已完成' : `💾 第 ${(save.questionIndex || 0) + 1} 题`;
    }
    return `💾 第 ${(save.currentIndex || 0) + 1} 题`;
  }

  // ========== 1. 版本选择页 ==========
  function renderVersionSelect() {
    const saves = window.Store ? window.Store.loadSaves() : {};
    const save = window.Store ? window.Store.loadGame() : null;
    document.documentElement.style.setProperty('--theme-color', '#6a11cb');
    app.innerHTML = `
      <div class="screen screen-select">
        <div class="top-actions">
          <button class="me-btn js-wordbook" data-from="home">单词本</button>
          <button class="me-btn js-me">👤 我的</button>
        </div>
        <header class="hero">
          <h1 class="title">剧抛大脑</h1>
          <p class="subtitle">英语生存局 · English Survival</p>
          <p class="hero-desc">200 个欧美剧高频词 × 5 种剧情人生<br>答对一题，小说剧情就往前一步</p>
          <div class="how-to-play">
            <span class="how-step"><i>1</i>选择人设</span>
            <span class="how-sep">→</span>
            <span class="how-step"><i>2</i>阅读剧情</span>
            <span class="how-sep">→</span>
            <span class="how-step"><i>3</i>完成英语选择</span>
            <span class="how-sep">→</span>
            <span class="how-step"><i>4</i>解锁下一章</span>
          </div>
        </header>
        ${save ? `
          <div class="resume-banner" id="resumeBanner">
            <div class="resume-info">
              <b>💾 上次的进度还在</b>
              <span>${saveSummary(save)}</span>
            </div>
            <span class="resume-go">继续 →</span>
          </div>
        ` : ''}
        <div class="version-grid">
          ${window.VERSIONS.map(v => `
            <div class="version-card" data-version="${v.id}" style="--card-color:${v.color}; --card-accent:${v.accent}">
              <div class="version-icon">${v.icon}</div>
              <div class="version-name">${v.name}</div>
              <div class="version-tagline">${v.tagline}</div>
              <div class="version-desc">${v.desc}</div>
              <div class="version-vibe">${v.vibe}</div>
              ${saves[v.id] ? `<div class="version-save">${saveTag(saves[v.id])}</div>` : ''}
            </div>
          `).join('')}
        </div>
        <footer class="footer-tip">💡 答对 +10 金币并推进剧情 · 答错扣血 · 100 金币复活</footer>
        ${isInAppWebView() ? `<div class="webview-tip">当前在 App 内打开，如果点朗读没有声音，请点右上角「在浏览器打开」再用一次</div>` : ''}
      </div>
    `;

    const banner = document.getElementById('resumeBanner');
    if (banner) {
      banner.addEventListener('click', () => {
        if (window.GameEngine.restore(save)) {
          document.documentElement.style.setProperty('--theme-color', window.GameEngine.getState().version.color);
          renderGame();
        } else {
          renderVersionSelect();
        }
      });
    }

    app.querySelectorAll('.version-card').forEach(card => {
      card.addEventListener('click', () => {
        const versionId = card.dataset.version;
        const ownSave = saves[versionId];
        // 每个剧本各自存档：有存档就直接续上，不会影响其他剧本
        if (ownSave && window.GameEngine.restore(ownSave)) {
          document.documentElement.style.setProperty('--theme-color', window.GameEngine.getState().version.color);
          renderGame();
        } else {
          startGame(versionId);
        }
      });
    });
  }

  // ========== 2. 开始游戏 ==========
  function startGame(versionId) {
    const state = window.GameEngine.init(versionId);
    if (!state) return;
    document.documentElement.style.setProperty('--theme-color', state.version.color);
    renderGame();
  }

  // ========== 3. 游戏主界面 ==========
  function renderGame() {
    const state = window.GameEngine.getState();
    if (!state) return renderVersionSelect();

    if (state.isDead) return renderDeath();
    if (state.mode === 'chapter') return renderChapterGame();
    if (window.GameEngine.isFinished()) return renderFinish();

    const q = window.GameEngine.getCurrentQuestion();
    const progress = window.GameEngine.getProgress();
    const novelProgress = window.GameEngine.getNovelProgress();

    app.innerHTML = `
      <div class="screen screen-game" style="--theme-color:${state.version.color}">
        <!-- 顶部状态栏 -->
        <div class="status-bar">
          <div class="status-left">
            <button class="icon-btn js-home" title="返回主页">←</button>
            <span class="version-badge">${state.version.icon} ${state.version.name}</span>
          </div>
          <div class="status-center">
            <div class="progress-track">
              <div class="progress-fill" style="width:${progress.percent}%"></div>
              <span class="progress-text">${progress.current} / ${progress.total}</span>
            </div>
          </div>
          <div class="status-right">
            <div class="stat hp" title="血量">
              <span class="stat-icon">❤️</span>
              <div class="hp-bar"><div class="hp-fill" style="width:${state.hp}%; background:${hpColor(state.hp)}"></div></div>
              <span class="stat-val">${state.hp}%</span>
            </div>
            <div class="stat coins" title="金币">
              <span class="coin-icon">¥</span>
              <span class="stat-val">${state.coins}</span>
            </div>
            <button class="icon-btn icon-text js-wordbook" data-from="game" title="单词本">词</button>
            <button class="icon-btn js-me" title="我的">👤</button>
          </div>
        </div>

        <!-- 题目卡 -->
        <div class="question-card" id="questionCard">
          ${renderQuestion(q)}
        </div>

        <!-- 小说解锁面板 -->
        <div class="novel-panel">
          ${renderNovelProgress(novelProgress)}
        </div>
      </div>
    `;

    bindQuestionEvents();
  }

  // ========== 3.5 章节模式（答题 ↔ 小说章节绑定） ==========
  function renderChapterGame() {
    const state = window.GameEngine.getState();
    // 换人设就换音色
    if (window.TTS) window.TTS.setProfile(state.version.id);
    const chapters = window.GameEngine.getChapterList();
    const ch = state.chapters[state.chapterIndex];
    const done = state.chapterDone;

    let q = null;
    if (!done) {
      q = window.GameEngine.getCurrentQuestion();
      if (!q) return renderVersionSelect();
    }

    const progress = window.GameEngine.getProgress();

    app.innerHTML = `
      <div class="screen screen-game" style="--theme-color:${state.version.color}">
        <div class="status-bar">
          <div class="status-left">
            <button class="icon-btn js-home" title="返回主页">←</button>
            <span class="version-badge">${state.version.icon} ${state.version.name}</span>
          </div>
          <div class="status-center">
            <div class="progress-track">
              <div class="progress-fill" style="width:${progress.percent}%"></div>
              <span class="progress-text">${progress.current} / ${progress.total} 题 · 第 ${progress.chapterCurrent} / ${progress.chapterTotal} 章</span>
            </div>
          </div>
          <div class="status-right">
            <div class="stat hp" title="血量">
              <span class="stat-icon">❤️</span>
              <div class="hp-bar"><div class="hp-fill" style="width:${state.hp}%; background:${hpColor(state.hp)}"></div></div>
              <span class="stat-val">${state.hp}%</span>
            </div>
            <div class="stat coins" title="金币">
              <span class="coin-icon">¥</span>
              <span class="stat-val">${state.coins}</span>
            </div>
            <button class="icon-btn icon-text js-wordbook" data-from="game" title="单词本">词</button>
            <button class="icon-btn js-me" title="我的">👤</button>
          </div>
        </div>

        <div class="story-card">
          <div class="story-label">📍 场景设定 · ${ch.novel} · ${ch.title}</div>
          <div class="story-text">${ch.storyText}</div>
        </div>

        ${state.chapterDone
          ? renderChapterResult(state, ch)
          : `
          <div class="question-card" id="questionCard">
            <div class="plot-desc">${q.question.plotDescription || ''}</div>
            <div class="speaker-row">
              ${renderAvatar(q.speaker)}
              <div class="speaker-meta">
                <div class="speaker-name">${q.speaker.name}</div>
                <div class="speaker-step">第 ${q.questionIndex + 1} / ${q.totalQuestions} 题</div>
              </div>
            </div>
            <div class="scene">
              <div class="scene-line">
                <div class="scene-text">
                  <div class="scene-en">
                    <span><b class="speaker-prefix">${q.speaker.name}:</b> "${q.question.line}"</span>
                    <span class="tts-btn" data-speak="${escapeAttr(q.question.line)}" data-lang="en-US" title="朗读台词">🔊</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="reply-label">${q.question.prompt}</div>
            <div class="options">
              ${q.question.options.map((opt, i) => `
                <button class="option" data-idx="${i}">
                  <span class="option-letter">${opt.key}</span>
                  <span class="option-text">
                    <span class="option-en option-meaning">${opt.cn}</span>
                  </span>
                </button>
              `).join('')}
            </div>
            <div class="feedback" id="feedback"></div>
          </div>`}

        <div class="chapter-panel">
          ${renderChapterPanel(chapters)}
        </div>

        <div class="chapter-panel reward-panel">
          ${renderRewardPanel()}
        </div>
      </div>
    `;

    bindTts();
    if (!state.chapterDone) bindChapterQuestionEvents();
    bindChapterListEvents();
    bindChapterResultEvents();
    bindRewardClicks();
  }

  function renderAvatar(speaker) {
    const av = (speaker && speaker.avatar) || window.VERSION_AVATARS.dual_male;
    if (av.url) {
      return `<div class="avatar avatar-photo"><img src="${av.url}" alt=""></div>`;
    }
    return `
      <div class="avatar" style="background:${av.bg}">
        <span class="avatar-emoji">${av.emoji}</span>
      </div>
    `;
  }

  function renderChapterPanel(chapters) {
    const novel = chapters[0] ? chapters[0].novel : '';
    return `
      <div class="novel-header">📖 提问用书 · ${novel} · 章节解锁</div>
      ${chapters.map(ch => {
        const pct = ch.total ? Math.round((ch.correct / ch.total) * 100) : 0;
        return `
          <div class="chapter-item ${ch.unlocked ? 'unlocked' : 'locked'} ${ch.cleared ? 'cleared' : ''}" data-chapter="${ch.index}">
            <div class="chapter-item-head">
              <span class="chapter-item-title">${ch.cleared ? '📖' : ch.unlocked ? '📕' : '🔒'} ${ch.title}</span>
              <span class="chapter-item-count">${ch.correct} / ${ch.total}</span>
            </div>
            <div class="novel-bar"><div class="novel-fill" style="width:${pct}%"></div></div>
          </div>
        `;
      }).join('')}
    `;
  }

  /** 奖励小说面板：每个版本 2 本，按原著章节划分，答对题目逐步解锁 */
  function renderRewardPanel() {
    const rewards = window.GameEngine.getRewardProgress();
    if (!rewards || rewards.length === 0) return '';
    const totalQ = window.GameEngine.getProgress().total || 200;
    return `
      <div class="novel-header">🎁 奖励小说 · 两本同步推进，每答对 1 题各推进 ${(100 / totalQ).toFixed(1)}%</div>
      ${rewards.map((n, bi) => `
        <div class="novel-card">
          <div class="novel-head">
            <span class="novel-cover">${n.cover}</span>
            <div class="novel-meta">
              <div class="novel-title">奖励${bi === 0 ? '①' : '②'} ${n.titleCn} · ${n.title}</div>
              <div class="novel-author">${n.author} ⭐ ${n.rating}</div>
            </div>
            <div class="novel-percent">${n.percent}%</div>
          </div>
          <div class="novel-bar"><div class="novel-fill" style="width:${n.percent}%"></div></div>
          <div class="novel-chapter-meta">已解锁 ${n.unlockedChapters} / ${n.totalChapters} 章 · 每答对 ${Math.max(1, Math.round(totalQ / n.totalChapters))} 题解锁 1 章</div>
          <div class="chapter-grid">
            ${n.chapters.map((c, i) => `
              <div class="chapter-chip ${i < n.unlockedChapters ? 'unlocked' : 'locked'}" data-reward="${bi}" data-ch="${i}">
                ${i < n.unlockedChapters ? '📖' : '🔒'} ${i + 1}. ${c.title || ('第' + (i + 1) + '章')}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
  }

  function bindRewardClicks() {
    const rewards = window.GameEngine.getRewardProgress();
    app.querySelectorAll('.reward-panel .chapter-chip.unlocked').forEach(chip => {
      chip.addEventListener('click', () => {
        const bi = parseInt(chip.dataset.reward, 10);
        const ci = parseInt(chip.dataset.ch, 10);
        const novel = rewards[bi];
        if (novel && novel.chapters[ci]) showChapterModal(novel, ci, novel.unlockedChapters);
      });
    });
  }

  /** 章节阅读弹窗：可在已解锁章节间翻页 */
  function showChapterModal(novel, idx, unlockedCount) {
    const total = novel.chapters.length;
    const chapter = novel.chapters[idx];
    const modal = el(`
      <div class="modal-overlay">
        <div class="modal modal-reader">
          <div class="modal-title">${novel.cover} ${novel.titleCn} · 第${idx + 1}章 ${chapter.title || ''}</div>
          <div class="modal-body reader-text">${chapter.text}</div>
          <div class="reader-nav">
            <button class="panel-btn ghost" data-nav="prev" ${idx <= 0 ? 'disabled' : ''}>← 上一章</button>
            <span class="reader-pos">${idx + 1} / ${total}</span>
            <button class="panel-btn ghost" data-nav="next" ${idx >= unlockedCount - 1 ? 'disabled' : ''}>下一章 →</button>
          </div>
          <button class="modal-close" data-nav="close">关闭</button>
        </div>
      </div>
    `);
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      const nav = e.target.dataset ? e.target.dataset.nav : null;
      if (nav === 'close' || e.target === modal) { modal.remove(); return; }
      if (nav === 'prev' && idx > 0) { modal.remove(); showChapterModal(novel, idx - 1, unlockedCount); }
      if (nav === 'next' && idx < unlockedCount - 1) { modal.remove(); showChapterModal(novel, idx + 1, unlockedCount); }
    });
  }

  function renderChapterResult(state, ch) {
    const passed = state.chapterPassed;
    const hasNext = passed && state.chapterIndex + 1 < state.chapters.length;
    return `
      <div class="result-card">
        <div class="result-emoji">${passed ? '🎉' : '💔'}</div>
        <h3 class="result-title">${passed ? '本章通过' : '本章未通过'}</h3>
        <div class="result-text">
          ${passed ? ch.completeText : '这一章还有题目没答对，章节没有解锁。再来一次，把它们全部答对。'}
        </div>
        <button class="next-btn" id="chapterResultBtn">
          ${hasNext ? '进入下一章 →' : (passed ? '重玩本章' : '重新挑战本章')}
        </button>
      </div>
    `;
  }

  function bindChapterResultEvents() {
    const btn = document.getElementById('chapterResultBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const state = window.GameEngine.getState();
      if (state.chapterPassed) {
        if (!window.GameEngine.nextChapter()) window.GameEngine.retryChapter();
      } else {
        window.GameEngine.retryChapter();
      }
      renderGame();
    });
  }

  function bindChapterListEvents() {
    app.querySelectorAll('.chapter-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.chapter, 10);
        const state = window.GameEngine.getState();
        if (idx === state.chapterIndex) return;
        if (window.GameEngine.goChapter(idx)) renderGame();
      });
    });
  }

  function bindChapterQuestionEvents() {
    app.querySelectorAll('.option').forEach(opt => {
      opt.addEventListener('click', () => {
        if (opt.classList.contains('answered')) return;
        handleChapterAnswer(parseInt(opt.dataset.idx, 10));
      });
    });
  }

  function handleChapterAnswer(idx) {
    const result = window.GameEngine.answer(idx);
    if (!result) return;

    const state = window.GameEngine.getState();
    const q = state.currentQuestion.question;

    app.querySelectorAll('.option').forEach((opt, i) => {
      opt.classList.add('answered');
      if (q.options[i].correct) opt.classList.add('correct');
      if (i === idx && !result.isCorrect) opt.classList.add('wrong');
    });

    const correctOpt = q.options.find(o => o.correct);
    const wrongOptions = q.options.filter(o => !o.correct);

    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `
      <div class="fb ${result.isCorrect ? 'fb-correct' : 'fb-wrong'}">
        ${result.isCorrect
          ? `✅ 答对了！+${window.GameEngine.CHAPTER_HEAL} 血量 · +${window.GameEngine.CORRECT_COINS} 金币`
          : `❌ ${q.wrongFeedback || ('答错了，气血 -' + window.GameEngine.CHAPTER_WRONG_LOSS + '。')}`}
        <div class="correct-line">✅ 正确答案：${correctOpt.key}. ${correctOpt.cn}</div>
        <div class="fb-block"><b>【语境解析】</b>${q.analysis}</div>
        <div class="fb-block"><b>【干扰项排雷】</b>
          ${wrongOptions.map(o => `<div class="fb-distractor">${o.key}. ${o.cn}（${o.en}）：${o.reason}</div>`).join('')}
        </div>
        <div class="fb-block"><b>【词汇拓展】</b>${q.vocab}</div>
        ${result.isCorrect && q.afterCorrect
          ? `<div class="plot-unlock">📖 ${q.afterCorrect}</div>`
          : ''}
      </div>
    `;

    if (result.isCorrect) window.TTS.speakEn(q.line);

    const card = document.getElementById('questionCard');
    const isLast = result.chapterDone;
    const nextBtn = el(`<button class="next-btn">${isLast ? '查看本章结果 →' : '下一题 →'}</button>`);
    nextBtn.addEventListener('click', () => {
      window.TTS.stop();
      renderGame();
    });
    card.appendChild(nextBtn);
  }

  /** 绑定所有朗读按钮 */
  function bindTts() {
    app.querySelectorAll('.tts-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.TTS.speak(btn.dataset.speak, btn.dataset.lang || 'en-US');
      });
    });
  }

  function renderQuestion(q) {
    if (window.TTS) window.TTS.setProfile(q.version.id);
    const speakerName = (q.scene && q.scene[0] && q.scene[0].who) || q.version.name;
    return `
      <div class="speaker-row">
        ${renderAvatar({ avatar: window.VERSION_AVATARS[q.version.id] })}
        <div class="speaker-meta">
          <div class="speaker-name">${speakerName}</div>
          <div class="speaker-step">${q.version.name} · 词汇模式</div>
        </div>
      </div>
      <div class="word-tag">
        ${q.hideMeaning
          ? `<span class="word-en">${q.word.word}</span><span class="word-cat">这词在这儿是什么意思？</span>`
          : `<span class="word-en">${q.title}</span><span class="word-cat">${q.word.word}</span>`}
      </div>
      ${renderScene(q)}
      ${q.question ? `<div class="reply-label">${q.question}</div>` : ''}
      <div class="options">
        ${q.options.map((opt, i) => `
          <button class="option" data-idx="${i}">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="option-text">
              ${opt.en
                ? `<span class="option-en">${opt.en}</span>`
                : `<span class="option-en option-meaning">${opt.cn}</span>`}
              ${opt.en && opt.cn ? `<span class="option-cn">${opt.cn}</span>` : ''}
            </span>
            ${opt.en ? `<span class="tts-btn opt-tts" data-speak="${escapeAttr(opt.en)}" data-lang="en-US" title="朗读选项">🔊</span>` : ''}
          </button>
        `).join('')}
      </div>
      <div class="feedback" id="feedback"></div>
    `;
  }

  /** 小说式对白气泡 */
  function renderScene(q) {
    if (!q.scene || q.scene.length === 0) return '';
    return `
      <div class="scene">
        ${q.scene.map(line => `
          <div class="scene-line">
            <div class="scene-speaker">${line.who}</div>
            <div class="scene-text">
              <div class="scene-en">
                <span>${line.en}</span>
                <span class="tts-btn" data-speak="${escapeAttr(line.en)}" data-lang="en-US" title="朗读台词">🔊</span>
              </div>
              ${line.cn ? `<div class="scene-cn">${line.cn}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function escapeAttr(s) {
    return String(s).replace(/"/g, '&quot;');
  }

  function bindQuestionEvents() {
    // TTS 朗读按钮（题目读中文，选项读英文）
    app.querySelectorAll('.tts-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.TTS.speak(btn.dataset.speak, btn.dataset.lang || 'en-US');
      });
    });

    // 选项点击
    app.querySelectorAll('.option').forEach(opt => {
      opt.addEventListener('click', () => {
        if (opt.classList.contains('answered')) return;
        const idx = parseInt(opt.dataset.idx, 10);
        handleAnswer(idx);
      });
    });
  }

  // ========== 4. 处理答题 ==========
  function handleAnswer(idx) {
    const result = window.GameEngine.answer(idx);
    if (!result) return;

    const options = app.querySelectorAll('.option');
    options.forEach((opt, i) => {
      opt.classList.add('answered');
      const q = window.GameEngine.getState().currentQuestion;
      if (q.options[i].correct) opt.classList.add('correct');
      if (i === idx && !result.isCorrect) opt.classList.add('wrong');
    });

    const feedback = document.getElementById('feedback');
    const q = window.GameEngine.getState().currentQuestion;
    const correctOpt = q.options.find(o => o.correct);
    const correctText = correctOpt ? correctOpt.en : '';
    const speakText = correctText || (q.word.word + '. ' + q.word.example);

    if (result.isCorrect) {
      feedback.innerHTML = `
        <div class="fb fb-correct">
          ✅ 答对了！+${window.GameEngine.CORRECT_COINS} 金币
          <div class="explanation">💡 ${result.explanation || ''}</div>
        </div>
      `;
    } else {
      feedback.innerHTML = `
        <div class="fb fb-wrong">
          ❌ 答错了！-${window.GameEngine.WRONG_HP_LOSS}% 血量
          <div class="correct-line">✅ 正确答案：${correctText || correctOpt.cn}</div>
          <div class="explanation">💡 ${result.explanation || ''}</div>
        </div>
      `;
    }

    // 无论对错，都自动朗读正确答案的英文句
    if (speakText) window.TTS.speakEn(speakText);

    // 显示"下一题"按钮
    const card = document.getElementById('questionCard');
    const nextBtn = el(`<button class="next-btn">下一题 →</button>`);
    nextBtn.addEventListener('click', () => {
      window.TTS.stop();
      // 如果答错且血量归零，renderGame 会显示死亡页
      renderGame();
    });
    card.appendChild(nextBtn);
  }

  // ========== 5. 死亡/复活页 ==========
  function renderDeath() {
    const state = window.GameEngine.getState();
    const canRevive = state.coins >= window.GameEngine.REVIVE_COST;
    app.innerHTML = `
      <div class="screen screen-death" style="--theme-color:${state.version.color}">
        <div class="death-card">
          <div class="death-emoji">💀</div>
          <h2 class="death-title">血量归零</h2>
          <p class="death-desc">你的 ${state.version.name} 之旅暂时中断了……</p>
          <div class="death-stats">
            <div>已答对：<b>${state.correctCount}</b> 题</div>
            <div>当前金币：<b>${state.coins}</b></div>
          </div>
          ${canRevive ? `
            <button class="revive-btn" id="reviveBtn">
              花 ${window.GameEngine.REVIVE_COST} 金币复活
            </button>
            <p class="revive-hint">复活后血量回满，从刚刚答错的题继续</p>
          ` : `
            <div class="no-revive">
              金币不足（需要 ${window.GameEngine.REVIVE_COST}）<br>
              无法复活，本局结束
            </div>
          `}
          <button class="back-btn" id="backBtn">返回版本选择</button>
        </div>
      </div>
    `;

    const reviveBtn = document.getElementById('reviveBtn');
    if (reviveBtn) {
      reviveBtn.addEventListener('click', () => {
        window.GameEngine.revive();
        renderGame();
      });
    }
    document.getElementById('backBtn').addEventListener('click', () => {
      window.TTS.stop();
      renderVersionSelect();
    });
  }

  // ========== 6. 小说解锁进度 ==========
  function renderNovelProgress(np) {
    if (!np) return '';
    const n1 = np.novel1;
    const n2 = np.novel2;
    const n1HTML = `
      <div class="novel-card">
        <div class="novel-head">
          <span class="novel-cover">${n1.cover}</span>
          <div class="novel-meta">
            <div class="novel-title">${n1.titleCn} · ${n1.title}</div>
            <div class="novel-author">${n1.author} ⭐ ${n1.rating}</div>
          </div>
          <div class="novel-percent">${n1.percent}%</div>
        </div>
        <div class="novel-bar"><div class="novel-fill" style="width:${n1.percent}%"></div></div>
        <div class="novel-segments">
          ${n1.segments.map((seg, i) => `
            <div class="seg ${i < n1.unlockedSegments ? 'unlocked' : 'locked'}" data-seg="${i}" data-novel="1">
              ${i < n1.unlockedSegments ? `📖 第${i+1}章` : `🔒 第${i+1}章`}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    let n2HTML = '';
    if (n2) {
      n2HTML = `
        <div class="novel-card">
          <div class="novel-head">
            <span class="novel-cover">${n2.cover}</span>
            <div class="novel-meta">
              <div class="novel-title">${n2.titleCn} · ${n2.title}</div>
              <div class="novel-author">${n2.author} ⭐ ${n2.rating}</div>
            </div>
            <div class="novel-percent">${n2.percent}%</div>
          </div>
          <div class="novel-bar"><div class="novel-fill" style="width:${n2.percent}%"></div></div>
          <div class="novel-segments">
            ${n2.segments.map((seg, i) => `
              <div class="seg ${i < n2.unlockedSegments ? 'unlocked' : 'locked'}" data-seg="${i}" data-novel="2">
                ${i < n2.unlockedSegments ? `📖 第${i+1}章` : `🔒 第${i+1}章`}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    return `
      <div class="novel-header">小说解锁（第一本进度 ${np.novel1.percent >= 100 ? '已解锁，进入第二本' : np.novel1.percent + '%'}）</div>
      ${n1HTML}
      ${n2HTML}
    `;
  }

  // 小说章节点击查看
  function bindNovelClicks() {
    app.querySelectorAll('.seg.unlocked').forEach(seg => {
      seg.addEventListener('click', () => {
        const novelIdx = parseInt(seg.dataset.novel, 10) - 1;
        const segIdx = parseInt(seg.dataset.seg, 10);
        const np = window.GameEngine.getNovelProgress();
        const novel = novelIdx === 0 ? np.novel1 : np.novel2;
        const text = novel.segments[segIdx];
        showSegmentModal(novel, segIdx, text);
      });
    });
  }

  function showSegmentModal(novel, segIdx, text) {
    const modal = el(`
      <div class="modal-overlay" id="segModal">
        <div class="modal">
          <div class="modal-title">${novel.cover} ${novel.titleCn} · 第${segIdx+1}章</div>
          <div class="modal-body">${text}</div>
          <button class="modal-close" id="modalClose">关闭</button>
        </div>
      </div>
    `);
    document.body.appendChild(modal);
    document.getElementById('modalClose').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  }

  // ========== 7. 通关页 ==========
  function renderFinish() {
    const state = window.GameEngine.getState();
    const np = window.GameEngine.getNovelProgress();
    app.innerHTML = `
      <div class="screen screen-finish" style="--theme-color:${state.version.color}">
        <div class="finish-card">
          <div class="finish-emoji">🎉</div>
          <h2 class="finish-title">恭喜通关！</h2>
          <p class="finish-desc">你已学完 200 个欧美剧高频词，解锁了完整剧情</p>
          <div class="finish-stats">
            <div>版本：${state.version.icon} ${state.version.name}</div>
            <div>答对题数：<b>${state.correctCount}</b> / 200</div>
            <div>剩余血量：<b>${state.hp}%</b></div>
            <div>累计金币：<b>${state.coins}</b></div>
          </div>
          <div class="finish-novels">
            <div>已解锁小说：</div>
            <div>① ${np.novel1.cover} ${np.novel1.titleCn}</div>
            ${np.novel2 ? `<div>② ${np.novel2.cover} ${np.novel2.titleCn}</div>` : ''}
          </div>
          <button class="back-btn" id="finishBack">再玩一次</button>
        </div>
      </div>
    `;
    document.getElementById('finishBack').addEventListener('click', renderVersionSelect);
  }

  // ========== 8. 我的（个人中心） ==========
  function renderProfile() {
    const profile = window.Store.loadProfile();
    const av = getAvatarChoice(profile.avatar);
    const saves = window.Store.listSaves();
    const latest = saves[0] || null;

    document.documentElement.style.setProperty('--theme-color', '#6a11cb');

    let doneCount = 0;
    let totalCoins = 0;
    let totalCorrect = 0;
    saves.forEach(s => {
      doneCount += s.cleared ? Object.keys(s.cleared).length : 0;
      totalCoins += s.coins || 0;
      totalCorrect += s.correctCount || 0;
    });

    const wStats = window.Store.loadWordStats();
    let wbTotal = 0, wbGreen = 0, wbYellow = 0, wbRed = 0;
    Object.keys(wStats).forEach(k => {
      const s = wStats[k];
      if (!s || (!s.correct && !s.wrong)) return;
      wbTotal += 1;
      if (s.wrong === 0) wbGreen += 1;
      else if (s.correct === 0) wbRed += 1;
      else wbYellow += 1;
    });

    app.innerHTML = `
      <div class="screen screen-profile" style="--theme-color:#6a11cb">
        <button class="back-link" id="profileBack">← 返回</button>

        <div class="profile-card">
          ${avatarHTML(av, 'avatar-lg')}
          <div class="profile-info">
            <div class="profile-name">${escapeHtml(profile.name)}</div>
            <div class="profile-sub">本机存档 · 换设备或清缓存不会同步</div>
          </div>
          <button class="edit-btn" id="editProfileBtn">编辑</button>
        </div>

        <div class="panel">
          <div class="panel-title">💾 我的存档（每部剧本独立保存）</div>
          ${saves.length ? `
            <div class="save-list">
              ${saves.map(s => {
                const v = window.getVersion(s.versionId);
                const list = window.NOVEL_CHAPTERS ? window.NOVEL_CHAPTERS[s.versionId] : null;
                const ch = list ? list[s.chapterIndex || 0] : null;
                if (!v) return '';
                return `
                  <div class="save-item">
                    <div class="save-item-head">
                      <span class="save-item-name">${v.icon} ${v.name}</span>
                      <span class="save-item-tag">${saveTag(s)}</span>
                    </div>
                    <div class="save-item-sub">${ch ? ch.novel + ' · ' + ch.title : '词汇模式'} · ❤️ ${s.hp}% · 金币 ${s.coins}</div>
                    <div class="save-item-actions">
                      <button class="panel-btn js-resume" data-vid="${s.versionId}">继续</button>
                      <button class="panel-btn ghost js-restart" data-vid="${s.versionId}">重新开始</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
            <button class="panel-btn ghost" id="switchVersionBtn">切换剧本</button>
          ` : `
            <div class="empty-save">还没有存档。挑一个剧本开始，之后每次回来都会接着上次的关卡。</div>
            <button class="next-btn" id="goSelectBtn">去挑剧本 →</button>
          `}
        </div>

        <div class="panel">
          <div class="panel-title">🏆 我的数据</div>
          <div class="stats-grid">
            <div class="stat-cell"><b>${doneCount}</b><span>已通过章节</span></div>
            <div class="stat-cell"><b>${totalCoins}</b><span>累计金币</span></div>
            <div class="stat-cell"><b>${totalCorrect}</b><span>累计答对</span></div>
            <div class="stat-cell"><b>${latest ? latest.hp + '%' : '—'}</b><span>最近血量</span></div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-title">单词本</div>
          <div class="wordbook-mini">
            已解锁 <b>${wbTotal}</b> 个 ·
            <span class="mini-green">一直对 ${wbGreen}</span> ·
            <span class="mini-yellow">错过 ${wbYellow}</span> ·
            <span class="mini-red">一直错 ${wbRed}</span>
          </div>
          <button class="panel-btn js-wordbook" data-from="profile">打开单词本 →</button>
        </div>

        <div class="panel">
          <div class="panel-title">🎮 玩法速览</div>
          <ul class="rule-list">
            <li>每个版本 200 道题，分 50 章，每章 4 题</li>
            <li>答对：+10 金币、气血 +5 并推进剧情；答错：气血 -10</li>
            <li>每章答对 3 题及以上：解锁本章和下一章</li>
            <li>气血归零：花 100 金币复活，回到答错的那一题</li>
            <li>每次作答后自动存档，刷新或下次打开都会接着来</li>
          </ul>
        </div>

        <div class="panel">
          <div class="panel-title">📮 问题反馈</div>
          <textarea class="form-input feedback-input" id="feedbackInput" rows="4" maxlength="500"
            placeholder="遇到 bug、题目有错、剧情读不通，都可以写在这里"></textarea>
          <div class="form-hint">点「发送」会打开你的邮箱，自动填好收件人 2109173509@qq.com；内容同时复制到剪贴板，邮箱没弹出时可手动粘贴发送。</div>
          <button class="next-btn" id="sendFeedbackBtn">发送</button>
          <div class="feedback-status" id="feedbackStatus"></div>
        </div>

        <div class="danger-zone">
          <button class="danger-btn" id="clearAllBtn">🗑 清除所有数据</button>
          <p class="danger-hint">会删除昵称、头像和全部关卡进度，只有你点确认后才会执行。</p>
        </div>
      </div>
    `;

    document.getElementById('profileBack').addEventListener('click', () => {
      if (window.GameEngine.getState()) renderGame();
      else renderVersionSelect();
    });

    document.getElementById('editProfileBtn').addEventListener('click', renderProfileEdit);

    app.querySelectorAll('.js-resume').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = saves.find(s => s.versionId === btn.dataset.vid);
        if (target && window.GameEngine.restore(target)) {
          document.documentElement.style.setProperty('--theme-color', window.GameEngine.getState().version.color);
          renderGame();
        } else {
          renderProfile();
        }
      });
    });

    app.querySelectorAll('.js-restart').forEach(btn => {
      btn.addEventListener('click', () => {
        const vid = btn.dataset.vid;
        const target = saves.find(s => s.versionId === vid);
        const v = window.getVersion(vid);
        confirmDialog({
          title: '重新开始这个剧本？',
          text: `「${v ? v.name : vid}」的存档（${saveSummary(target)}）会被清除，其他剧本的存档不受影响。`,
          okText: '重新开始',
          onOk: () => {
            window.Store.clearGame(vid);
            startGame(vid);
          }
        });
      });
    });

    const switchBtn = document.getElementById('switchVersionBtn');
    if (switchBtn) switchBtn.addEventListener('click', renderVersionSelect);

    const goSelectBtn = document.getElementById('goSelectBtn');
    if (goSelectBtn) goSelectBtn.addEventListener('click', renderVersionSelect);

    document.getElementById('sendFeedbackBtn').addEventListener('click', () => {
      const input = document.getElementById('feedbackInput');
      const status = document.getElementById('feedbackStatus');
      const text = input.value.trim();
      if (text.length < 5) {
        status.textContent = '再多写几个字（至少 5 个字）才能发送哦';
        status.className = 'feedback-status warn';
        return;
      }
      const profile = window.Store.loadProfile();
      const v = latest ? window.getVersion(latest.versionId) : null;
      const body = [
        '【剧抛大脑 · 问题反馈】',
        '',
        text,
        '',
        '—— 自动附带信息 ——',
        '昵称：' + (profile.name || '未设置'),
        '当前剧本：' + (v ? v.name : '未开始'),
        '进度：' + (latest ? saveSummary(latest) : '无存档'),
        '血量 / 金币：' + (latest ? latest.hp + '% / ' + latest.coins : '—'),
        '页面：' + location.href,
        '设备：' + navigator.userAgent,
        '时间：' + new Date().toLocaleString('zh-CN')
      ].join('\n');
      const mailto = 'mailto:2109173509@qq.com?subject=' +
        encodeURIComponent('【剧抛大脑】问题反馈 - ' + (profile.name || '玩家')) +
        '&body=' + encodeURIComponent(body);
      const go = () => {
        window.location.href = mailto;
        status.textContent = '已调起邮箱。如果没有弹出，内容已复制，手动发到 2109173509@qq.com 即可。';
        status.className = 'feedback-status ok';
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(body).then(go, go);
      } else {
        go();
      }
    });

    document.getElementById('clearAllBtn').addEventListener('click', () => {
      confirmDialog({
        title: '确认清除所有数据？',
        text: '昵称、头像和全部关卡进度都会被删除，且无法恢复。',
        okText: '确认清除',
        onOk: () => {
          window.Store.clearAll();
          window.GameEngine.reset();
          renderProfile();
        }
      });
    });
  }

  // ========== 8.5 单词本 ==========
  /** 只列出已答过的单词：一直对=绿、错过但答对过=黄、一次没对过=红 */
  function renderWordBook(from) {
    document.documentElement.style.setProperty('--theme-color', '#6a11cb');
    // 单词本是跨剧本汇总的，用回默认音色
    if (window.TTS) window.TTS.setProfile(null);

    const stats = window.Store.loadWordStats();
    const bank = window.WORD_BANK || [];
    const rows = [];

    bank.forEach(w => {
      const s = stats[w.id];
      if (!s || (!s.correct && !s.wrong)) return;   // 没解锁的不出现
      let status = 'yellow';
      if (s.wrong === 0) status = 'green';
      else if (s.correct === 0) status = 'red';
      rows.push({ id: w.id, word: w.word, meaning: w.meaning, category: w.category, correct: s.correct, wrong: s.wrong, status });
    });

    const order = { red: 0, yellow: 1, green: 2 };
    rows.sort((a, b) => (order[a.status] - order[b.status]) || (a.id - b.id));

    const green = rows.filter(r => r.status === 'green').length;
    const yellow = rows.filter(r => r.status === 'yellow').length;
    const red = rows.filter(r => r.status === 'red').length;

    app.innerHTML = `
      <div class="screen screen-profile screen-wordbook" style="--theme-color:#6a11cb">
        <button class="back-link" id="wordbookBack">← 返回</button>

        <div class="profile-card">
          <div class="avatar-lg wordbook-emoji">词</div>
          <div class="profile-info">
            <div class="profile-name">单词本</div>
            <div class="profile-sub">只显示你答过的单词 · 共 ${rows.length} 个 · 五个剧本共用一本</div>
          </div>
        </div>

        ${rows.length ? `
          <div class="panel">
            <div class="stats-grid">
              <div class="stat-cell"><b>${rows.length}</b><span>已解锁</span></div>
              <div class="stat-cell stat-green"><b>${green}</b><span>一直答对</span></div>
              <div class="stat-cell stat-yellow"><b>${yellow}</b><span>错过也答对过</span></div>
              <div class="stat-cell stat-red"><b>${red}</b><span>一次没对过</span></div>
            </div>
          </div>

          <div class="panel">
            <div class="wordbook-legend">
              <span><i class="legend-dot dot-green"></i>一直答对</span>
              <span><i class="legend-dot dot-yellow"></i>有答错记录</span>
              <span><i class="legend-dot dot-red"></i>一直答错</span>
            </div>
            <div class="wordbook-grid">
              ${rows.map(r => `
                <div class="word-item ${r.status}">
                  <div class="word-item-top">
                    <span class="word-item-en">${escapeHtml(r.word)}</span>
                    <span class="tts-btn" data-speak="${escapeAttr(r.word)}" data-lang="en-US" title="朗读单词">🔊</span>
                  </div>
                  <div class="word-item-cn">${escapeHtml(r.meaning)}</div>
                  <div class="word-item-stat">答对 ${r.correct} 次 · 答错 ${r.wrong} 次</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : `
          <div class="panel">
            <div class="empty-save">单词本还是空的。答过一道题，这个词就会记进来；答对答错会分别标成不同颜色。</div>
            <button class="next-btn" id="wordbookGo">去答题 →</button>
          </div>
        `}
      </div>
    `;

    document.getElementById('wordbookBack').addEventListener('click', () => {
      if (from === 'game' && window.GameEngine.getState()) renderGame();
      else if (from === 'home') renderVersionSelect();
      else renderProfile();
    });

    const goBtn = document.getElementById('wordbookGo');
    if (goBtn) goBtn.addEventListener('click', renderVersionSelect);

    bindTts();
  }

  // ========== 9. 编辑资料（昵称 + 头像） ==========
  function renderProfileEdit() {
    const profile = window.Store.loadProfile();
    let picked = profile.avatar;
    let customData = profile.customAvatar || '';

    document.documentElement.style.setProperty('--theme-color', '#6a11cb');

    const customTile = () => customData ? `
      <button class="avatar-choice ${picked === 'custom' ? 'selected' : ''}" data-avatar="custom">
        ${avatarHTML({ type: 'img', url: customData })}
        <span class="avatar-choice-label">我的</span>
      </button>
    ` : '';

    app.innerHTML = `
      <div class="screen screen-profile" style="--theme-color:#6a11cb">
        <button class="back-link" id="editBack">← 返回我的</button>

        <div class="panel">
          <div class="panel-title">✏️ 昵称</div>
          <input class="form-input" id="nameInput" maxlength="12" value="${escapeHtml(profile.name)}" placeholder="给自己起个名字">
          <div class="form-hint">最多 12 个字，只保存在这台设备</div>
        </div>

        <div class="panel">
          <div class="panel-title">🖼 头像</div>
          <div class="avatar-grid" id="avatarGrid">
            ${customTile()}
            ${AVATAR_CHOICES.map(a => `
              <button class="avatar-choice ${a.id === picked ? 'selected' : ''}" data-avatar="${a.id}">
                ${avatarHTML(a)}
                <span class="avatar-choice-label">${a.label}</span>
              </button>
            `).join('')}
          </div>
          <button class="panel-btn ghost" id="uploadAvatarBtn">📷 上传我自己的头像</button>
          <input type="file" id="avatarFile" accept="image/*" hidden>
          <div class="form-hint">点上传会先询问是否允许打开相册；图片会居中裁成正方形并压缩，只存在这台设备，不会上传到任何服务器。</div>
        </div>

        <button class="next-btn" id="saveProfileBtn">保存资料</button>
      </div>
    `;

    function bindChoices() {
      app.querySelectorAll('.avatar-choice').forEach(btn => {
        btn.onclick = () => {
          picked = btn.dataset.avatar;
          app.querySelectorAll('.avatar-choice').forEach(b => {
            b.classList.toggle('selected', b === btn);
          });
        };
      });
    }
    bindChoices();

    const fileInput = document.getElementById('avatarFile');
    const uploadBtn = document.getElementById('uploadAvatarBtn');

    uploadBtn.addEventListener('click', () => {
      if (window.Store.loadAlbumConsent()) {
        fileInput.click();
        return;
      }
      confirmDialog({
        title: '允许打开相册吗？',
        text: '上传头像需要读取你相册里的一张图片。图片只会在本机裁剪压缩后保存，不会上传到任何服务器。此询问只出现一次。',
        okText: '允许并选择图片',
        onOk: () => {
          window.Store.saveAlbumConsent();
          fileInput.click();
        }
      });
    });

    fileInput.addEventListener('change', () => {
      const file = fileInput.files && fileInput.files[0];
      fileInput.value = '';
      if (!file) return;
      if (file.type.indexOf('image/') !== 0) {
        uploadBtn.textContent = '⚠️ 请选择图片文件';
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        shrinkImage(reader.result, 240).then(url => {
          customData = url;
          picked = 'custom';
          const grid = document.getElementById('avatarGrid');
          const old = grid.querySelector('[data-avatar="custom"]');
          const html = `
            <button class="avatar-choice selected" data-avatar="custom">
              ${avatarHTML({ type: 'img', url: customData })}
              <span class="avatar-choice-label">我的</span>
            </button>`;
          if (old) old.outerHTML = html;
          else grid.insertAdjacentHTML('afterbegin', html);
          bindChoices();
          uploadBtn.textContent = '✅ 已选好，点下方「保存资料」生效';
        });
      };
      reader.readAsDataURL(file);
    });

    document.getElementById('editBack').addEventListener('click', renderProfile);
    document.getElementById('saveProfileBtn').addEventListener('click', () => {
      const name = document.getElementById('nameInput').value.trim();
      const saved = window.Store.saveProfile({
        name: name || '剧抛新人',
        avatar: picked,
        customAvatar: customData
      });
      if (!saved) {
        uploadBtn.textContent = '⚠️ 本地存储空间不足，头像可能没保存成功';
        return;
      }
      renderProfile();
    });
  }

  // ========== 全局事件委托：小说章节点击 ==========
  app.addEventListener('click', (e) => {
    const seg = e.target.closest('.seg.unlocked');
    if (seg) {
      const novelIdx = parseInt(seg.dataset.novel, 10) - 1;
      const segIdx = parseInt(seg.dataset.seg, 10);
      const np = window.GameEngine.getNovelProgress();
      if (!np) return;
      const novel = novelIdx === 0 ? np.novel1 : np.novel2;
      if (novel) showSegmentModal(novel, segIdx, novel.segments[segIdx]);
    }
  });

  // ========== 全局事件委托：返回主页 ==========
  app.addEventListener('click', (e) => {
    if (e.target.closest('.js-home')) {
      window.TTS.stop();
      renderVersionSelect();
    }
  });

  // ========== 全局事件委托：进入「单词本」 ==========
  app.addEventListener('click', (e) => {
    const btn = e.target.closest('.js-wordbook');
    if (btn) {
      window.TTS.stop();
      renderWordBook(btn.dataset.from || 'profile');
    }
  });

  // ========== 全局事件委托：进入「我的」 ==========
  app.addEventListener('click', (e) => {
    if (e.target.closest('.js-me')) {
      window.TTS.stop();
      renderProfile();
    }
  });

  // ========== 启动：有存档直接续上上次的关卡 ==========
  const savedGame = window.Store ? window.Store.loadGame() : null;
  if (savedGame && window.GameEngine.restore(savedGame)) {
    document.documentElement.style.setProperty('--theme-color', window.GameEngine.getState().version.color);
    renderGame();
  } else {
    renderVersionSelect();
  }
})();
