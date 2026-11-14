/**
 * TTS 语音朗读 —— 基于浏览器 Web Speech API
 * 每段英语点击即可朗读，默认美式英语
 */
window.TTS = (function() {
  let synth = null;
  let currentUtterance = null;

  function init() {
    if ('speechSynthesis' in window) {
      synth = window.speechSynthesis;
    }
  }

  /** 朗读文本，lang 默认 en-US */
  function speak(text, lang) {
    if (!synth) {
      console.warn('当前浏览器不支持语音合成 TTS');
      return;
    }
    // 打断上一段
    stop();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang || 'en-US';
    utter.rate = 0.95;
    utter.pitch = 1;
    currentUtterance = utter;
    synth.speak(utter);
  }

  /** 朗读英语 */
  function speakEn(text) {
    speak(text, 'en-US');
  }

  /** 停止朗读 */
  function stop() {
    if (synth) {
      synth.cancel();
    }
    currentUtterance = null;
  }

  /** 是否正在朗读 */
  function isSpeaking() {
    return synth ? synth.speaking : false;
  }

  // 初始化
  if (typeof window !== 'undefined') init();

  return { speak, speakEn, stop, isSpeaking };
})();
