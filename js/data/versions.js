/**
 * 版本定义 Versions —— 5 种剧情版本
 * 每个版本有独立的视觉风格、气质关键词、对应小说
 */
window.VERSIONS = [
  {
    id: 'female_lead',
    name: '大女主',
    icon: '👑',
    tagline: '搞钱野心·清醒大女主',
    desc: '不依附、不内耗，搞钱才是硬道理。每一句台词都透着姐就是女王的气场。',
    color: '#e91e63',
    accent: '#f8bbd0',
    vibe: '野心、清醒、搞钱、独立'
  },
  {
    id: 'male_lead',
    name: '大男主',
    icon: '⚔️',
    tagline: '杀伐果断·逆袭大男主',
    desc: '从低谷到巅峰，男人的字典里没有认输。每一次反击都是封神时刻。',
    color: '#1565c0',
    accent: '#bbdefb',
    vibe: '逆袭、霸气、守护、杀伐'
  },
  {
    id: 'dual_female',
    name: '百合',
    icon: '🌸',
    tagline: '双生花·并肩心动',
    desc: '她和她，是彼此的光。一起搞钱、一起清醒、一起把日子过成诗。',
    color: '#7b1fa2',
    accent: '#e1bee7',
    vibe: '心动、并肩、治愈、羁绊'
  },
  {
    id: 'dual_male',
    name: '耽美',
    icon: '🌙',
    tagline: '宿命羁绊·并肩同行',
    desc: '两个男人，一段不能言说的深情。是救赎，也是彼此的唯一。',
    color: '#e65100',
    accent: '#ffe0b2',
    vibe: '宿命、深情、救赎、唯一'
  },
  {
    id: 'pure_love',
    name: '纯爱版',
    icon: '💕',
    tagline: '双向救赎·纯爱战神',
    desc: '从心动到余生，我只想做你的例外。最温柔的台词，最戳心的告白。',
    color: '#c2185b',
    accent: '#fce4ec',
    vibe: '温柔、心动、救赎、长情'
  }
];

/** 按 id 获取版本 */
window.getVersion = function(id) {
  return window.VERSIONS.find(v => v.id === id);
};
