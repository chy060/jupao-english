/**
 * 本地存档层 Store —— 只负责读写 localStorage，不参与任何游戏逻辑
 *
 * 存储位：
 *   jupao.profile.v1   用户资料 { name, avatar }
 *   jupao.saves.v1     按剧本分开的关卡存档 { [versionId]: snapshot }
 *   jupao.last.v1      最近一次游玩的剧本 id（决定启动时续哪一档）
 *   jupao.save.v1      旧版单档存档（首次读取时自动迁移进 jupao.saves.v1）
 *
 * 所有读写都做了异常保护：隐私模式 / 空间不足时静默降级，不影响游戏。
 */
window.Store = (function() {
  const PROFILE_KEY = 'jupao.profile.v1';
  const SAVES_KEY = 'jupao.saves.v1';
  const LAST_KEY = 'jupao.last.v1';
  const LEGACY_SAVE_KEY = 'jupao.save.v1';
  const ALBUM_KEY = 'jupao.album.consent.v1';
  const WORD_STATS_KEY = 'jupao.wordstats.v1';

  const DEFAULT_PROFILE = { name: '剧抛新人', avatar: 'oliver', customAvatar: '' };

  function read(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return fallback;
      const data = JSON.parse(raw);
      return data == null ? fallback : data;
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  /** 读取全部存档，并把旧版单档迁移进来 */
  function loadSaves() {
    const saves = read(SAVES_KEY, null);
    if (saves && typeof saves === 'object') return saves;

    const legacy = read(LEGACY_SAVE_KEY, null);
    if (legacy && legacy.versionId) {
      const migrated = {};
      migrated[legacy.versionId] = legacy;
      write(SAVES_KEY, migrated);
      write(LAST_KEY, legacy.versionId);
      try { window.localStorage.removeItem(LEGACY_SAVE_KEY); } catch (e) { /* ignore */ }
      return migrated;
    }
    return {};
  }

  function loadLastId() {
    try {
      return window.localStorage.getItem(LAST_KEY) || null;
    } catch (e) {
      return null;
    }
  }

  return {
    /** 读取用户资料（永远返回完整对象） */
    loadProfile: function() {
      const saved = read(PROFILE_KEY, null);
      return Object.assign({}, DEFAULT_PROFILE, saved || {});
    },

    /** 保存用户资料 */
    saveProfile: function(profile) {
      const prev = this.loadProfile();
      return write(PROFILE_KEY, {
        name: profile.name,
        avatar: profile.avatar,
        customAvatar: typeof profile.customAvatar === 'string' ? profile.customAvatar : prev.customAvatar
      });
    },

    /** 相册授权：只问一次，记住选择 */
    loadAlbumConsent: function() {
      try { return window.localStorage.getItem(ALBUM_KEY) === '1'; } catch (e) { return false; }
    },

    saveAlbumConsent: function() {
      try { window.localStorage.setItem(ALBUM_KEY, '1'); } catch (e) { /* ignore */ }
    },

    /** 单词本原始数据 { [wordId]: { correct, wrong } }，所有剧本共用一本 */
    loadWordStats: function() {
      const data = read(WORD_STATS_KEY, null);
      return data && typeof data === 'object' ? data : {};
    },

    /** 记录一次作答结果，用于单词本标色 */
    recordWordStat: function(wordId, isCorrect) {
      if (wordId == null) return false;
      const stats = this.loadWordStats();
      const cur = stats[wordId] || { correct: 0, wrong: 0 };
      if (isCorrect) cur.correct += 1;
      else cur.wrong += 1;
      stats[wordId] = cur;
      return write(WORD_STATS_KEY, stats);
    },

    /** 全部存档表 { versionId: snapshot } */
    loadSaves: loadSaves,

    /** 存档列表，按保存时间倒序 */
    listSaves: function() {
      const saves = loadSaves();
      return Object.keys(saves)
        .map(id => saves[id])
        .filter(s => s && s.versionId)
        .sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
    },

    /**
     * 读取关卡存档
     * 传 versionId 读指定剧本的存档；不传则读最近玩的那个剧本
     */
    loadGame: function(versionId) {
      const saves = loadSaves();
      if (versionId) return saves[versionId] || null;
      const lastId = loadLastId();
      if (lastId && saves[lastId]) return saves[lastId];
      const list = Object.keys(saves)
        .map(id => saves[id])
        .filter(s => s && s.versionId)
        .sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
      return list[0] || null;
    },

    /** 写入关卡存档（按 versionId 独立保存），附带保存时间 */
    saveGame: function(snapshot) {
      if (!snapshot || !snapshot.versionId) return false;
      const saves = loadSaves();
      saves[snapshot.versionId] = Object.assign({}, snapshot, { savedAt: Date.now() });
      write(SAVES_KEY, saves);
      try { window.localStorage.setItem(LAST_KEY, snapshot.versionId); } catch (e) { /* ignore */ }
      return true;
    },

    /** 清除存档：传 versionId 只清这一部剧本，不传则清空全部剧本存档 */
    clearGame: function(versionId) {
      const saves = loadSaves();
      if (versionId) {
        delete saves[versionId];
      } else {
        Object.keys(saves).forEach(k => delete saves[k]);
      }
      write(SAVES_KEY, saves);
      try {
        if (!versionId || loadLastId() === versionId) window.localStorage.removeItem(LAST_KEY);
      } catch (e) { /* ignore */ }
    },

    /** 清除昵称、头像和全部关卡存档 */
    clearAll: function() {
      try {
        window.localStorage.removeItem(SAVES_KEY);
        window.localStorage.removeItem(LAST_KEY);
        window.localStorage.removeItem(PROFILE_KEY);
        window.localStorage.removeItem(LEGACY_SAVE_KEY);
        window.localStorage.removeItem(ALBUM_KEY);
        window.localStorage.removeItem(WORD_STATS_KEY);
      } catch (e) { /* ignore */ }
    }
  };
})();
