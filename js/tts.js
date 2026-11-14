/**
 * TTS 语音朗读 —— 基于浏览器 Web Speech API
 * 每段英语点击即可朗读，默认美式英语
 *
 * 兼容处理（都是实际踩过的坑）：
 * 1. Chrome 里 cancel() 后立刻 speak() 会静音 —— 必须隔开一小段时间
 * 2. 语音列表是异步加载的，刚打开页面时 getVoices() 可能是空数组
 * 3. 系统没装英语语音时合成会失败 —— 用在线词典音频兜底
 */
window.TTS = (function() {
  let synth = null;
  let voices = [];
  let currentUtterance = null;
  let audioEl = null;
  let profileId = null;

  /**
   * 各版本的人设音色
   * prefer 是优先匹配的语音名（不同浏览器/系统可用的语音不一样），
   * pitch / rate 是兜底差异：就算只有一条英语语音，也能听出不同人设
   */
  const PROFILES = {
    female_lead: { pitch: 1.05, rate: 1.00, prefer: ['Google US English', 'Samantha', 'Jenny', 'Aria', 'Zira'] }, // 大女主：干练御姐
    male_lead:   { pitch: 0.60, rate: 0.92, prefer: ['Google UK English Male', 'David', 'Mark', 'Guy', 'Ryan', 'Daniel', 'Alex'] }, // 大男主：低沉磁性
    dual_female: { pitch: 1.25, rate: 1.04, prefer: ['Google US English', 'Samantha', 'Jenny', 'Aria', 'Zira'] }, // 百合：明亮温柔
    dual_male:   { pitch: 0.80, rate: 1.00, prefer: ['Google UK English Male', 'Daniel', 'Mark', 'Guy', 'David', 'Alex'] }, // 耽美：年轻清亮
    pure_love:   { pitch: 1.40, rate: 0.88, prefer: ['Google US English', 'Samantha', 'Aria', 'Jenny', 'Zira'] } // 纯爱：轻缓治愈
  };

  function init() {
    if ('speechSynthesis' in window) {
      synth = window.speechSynthesis;
      loadVoices();
      if (synth.addEventListener) {
        synth.addEventListener('voiceschanged', loadVoices);
      } else {
        synth.onvoiceschanged = loadVoices;
      }
    }
  }

  function loadVoices() {
    try {
      voices = synth.getVoices() || [];
    } catch (e) {
      voices = [];
    }
  }

  /** 找一条最合适的语音：优先人设指定的语音名 > 完全匹配语言 > 同语种 > 任意英语 */
  function pickVoice(lang, prefer) {
    if (!voices.length) loadVoices();
    const want = String(lang || 'en-US').toLowerCase();
    const short = want.split('-')[0];
    let hit = null;

    if (prefer && prefer.length) {
      for (let i = 0; i < prefer.length && !hit; i++) {
        const key = prefer[i].toLowerCase();
        hit = voices.find(v => String(v.name || '').toLowerCase().indexOf(key) >= 0);
      }
    }
    if (!hit) hit = voices.find(v => String(v.lang || '').toLowerCase() === want);
    if (!hit) hit = voices.find(v => String(v.lang || '').toLowerCase().indexOf(short) === 0);
    if (!hit) hit = voices.find(v => /^en/i.test(String(v.lang || '')));
    return hit || null;
  }

  /** 兜底：用在线词典音频（本机无英语语音时才有意义） */
  function playAudio(text) {
    try {
      const url = 'https://dict.youdao.com/dictvoice?type=2&audio=' + encodeURIComponent(text);
      if (!audioEl) audioEl = new Audio();
      audioEl.src = url;
      const p = audioEl.play();
      if (p && p.catch) p.catch(function() {});
      return true;
    } catch (e) {
      return false;
    }
  }

  function stopAudio() {
    if (audioEl) {
      try { audioEl.pause(); audioEl.currentTime = 0; } catch (e) {}
    }
  }

  function doSpeak(text, lang) {
    const profile = PROFILES[profileId] || null;
    const startSpeak = function() {
      try {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = lang;
        utter.rate = profile ? profile.rate : 0.95;
        utter.pitch = profile ? profile.pitch : 1;
        const voice = pickVoice(lang, profile ? profile.prefer : null);
        if (voice) utter.voice = voice;

        let started = false;
        utter.onstart = function() { started = true; };
        utter.onerror = function() { if (!started) playAudio(text); };

        currentUtterance = utter;
        if (synth.paused) synth.resume();
        synth.speak(utter);

        // 合成器没有任何反应（系统缺语音/被静音）时改用云端音频
        setTimeout(function() {
          if (!started && !synth.speaking && !synth.pending) playAudio(text);
        }, 1200);
      } catch (e) {
        playAudio(text);
      }
    };

    if (synth.speaking || synth.pending) {
      synth.cancel();
      // Chrome 的坑：cancel 之后必须隔开再 speak，否则这一句会被吞掉
      setTimeout(startSpeak, 90);
    } else {
      startSpeak();
    }
  }

  /** 朗读文本，lang 默认 en-US */
  function speak(text, lang) {
    const content = String(text == null ? '' : text).replace(/^\s+|\s+$/g, '');
    if (!content) return;
    const language = lang || 'en-US';

    stopAudio();

    if (!synth) {
      playAudio(content);
      return;
    }

    // 语音列表可能还没加载好，最多等 600ms
    if (!voices.length) {
      loadVoices();
      if (!voices.length) {
        const start = Date.now();
        (function wait() {
          loadVoices();
          if (voices.length) return doSpeak(content, language);
          if (Date.now() - start > 600) {
            // 仍然没有语音：直接试一次合成，失败会自动走音频兜底
            doSpeak(content, language);
            return;
          }
          setTimeout(wait, 60);
        })();
        return;
      }
    }

    doSpeak(content, language);
  }

  /** 朗读英语 */
  function speakEn(text) {
    speak(text, 'en-US');
  }

  /** 停止朗读 */
  function stop() {
    if (synth) synth.cancel();
    stopAudio();
    currentUtterance = null;
  }

  /** 是否正在朗读 */
  function isSpeaking() {
    return synth ? (synth.speaking || synth.pending) : false;
  }

  /** 切换人设音色：传版本 id；传空则恢复默认中性音色 */
  function setProfile(id) {
    profileId = PROFILES[id] ? id : null;
  }

  // 初始化
  if (typeof window !== 'undefined') init();

  return { speak, speakEn, stop, isSpeaking, setProfile };
})();
