// 生成一个不重复的随机数组
function createArr(length, min, max) {
  if (min >= max) return [];
  let newSet = new Set();
  while (newSet.size < length) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    newSet.add(num);
  }
  return [...newSet];
  // return Array.from(newSet);
}
console.log("不重复结果", createArr(9, 100, 300));
