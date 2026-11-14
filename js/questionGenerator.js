/**
 * 题目生成器 QuestionGenerator
 * 用「词汇 + 版本 + 模板」生成小说式对白题
 *
 * 题目结构（source = specific / story）：
 *   title       中文标题（词的释义）
 *   scene       剧情对白 [{ who, en, cn }]
 *   question    固定为「请选择你的回复：」
 *   options     3 个英文回复 [{ en, cn, correct }]，顺序固定（解析按 A/B/C 引用）
 *   explanation 中文逻辑解析
 *
 * 兜底结构（source = fallback，暂无剧情模板的词）：
 *   剧情里的一句英文台词 + 选出该词在这句话里的意思（中文选项，已打乱）
 *
 * 查找优先级：
 *   1. specific[versionId][wordId]  版本专属剧情
 *   2. byWord[wordId]               通用剧情（所有版本共用）
 *   3. generic                      兜底剧情理解题
 */
window.QuestionGenerator = (function() {

  function pickOne(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  /** 把模板包装成小说式对白题（选项顺序保持 A/B/C 不洗牌） */
  function makeStoryQuestion(word, version, template, source) {
    return {
      word,
      version,
      source,
      title: template.title || word.meaning,
      scene: template.scene.map(line => ({ ...line })),
      question: '请选择你的回复：',
      options: template.options.map(o => ({ ...o })),
      explanation: template.explanation
    };
  }

  /** 兜底：剧情感十足的「台词理解题」 */
  function makeFallbackQuestion(word, version) {
    const others = window.sample(
      window.WORD_BANK.filter(w => w.id !== word.id),
      2
    );

    const options = [
      { en: '', cn: word.meaning, correct: true },
      { en: '', cn: others[0].meaning, correct: false },
      { en: '', cn: others[1].meaning, correct: false }
    ];

    return {
      word,
      version,
      source: 'fallback',
      hideMeaning: true,
      title: word.word,
      scene: [
        {
          who: word.category === 'conflict' ? 'TA' : '剧中台词',
          en: word.example,
          cn: `（这句话里的 ${word.word}，是什么意思？）`
        }
      ],
      question: `选出这句话里 ${word.word} 的意思：`,
      options: window.shuffleOptions(options),
      explanation: `「${word.word}」的意思是「${word.meaning}」。剧中台词：${word.example}`
    };
  }

  /** 主入口 */
  function generate(word, version) {
    const byVersion = (window.TEMPLATES.specific || {})[version.id] || {};
    const specific = byVersion[word.id];
    if (specific && specific.length > 0) {
      return makeStoryQuestion(word, version, pickOne(specific), 'specific');
    }

    const common = (window.TEMPLATES.byWord || {})[word.id];
    if (common && common.length > 0) {
      return makeStoryQuestion(word, version, pickOne(common), 'story');
    }

    return makeFallbackQuestion(word, version);
  }

  return { generate };
})();
