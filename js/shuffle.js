/**
 * Fisher-Yates 洗牌算法
 * 保证 200 个词全清空且乱序 —— 每个词出现且仅出现一次
 * 纯函数，不修改原数组，返回新的乱序数组
 */
window.fisherYatesShuffle = function(arr) {
  const result = arr.slice(); // 拷贝，不污染原数据
  for (let i = result.length - 1; i > 0; i--) {
    // 从 [0, i] 中随机取一个下标
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

/**
 * 打乱选项顺序（3 个选项也用 Fisher-Yates）
 */
window.shuffleOptions = function(options) {
  return window.fisherYatesShuffle(options);
};

/**
 * 从数组中随机取 n 个不重复元素
 */
window.sample = function(arr, n) {
  return window.fisherYatesShuffle(arr).slice(0, n);
};
