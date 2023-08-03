let obj = {
  a: "测试",
};
console.log("属性描述符全部", Object.getOwnPropertyDescriptors(obj));
console.log("属性描述符单个", Object.getOwnPropertyDescriptor(obj, "a"));
console.log("对象长度", Object.keys(obj));
Object.defineProperty(obj, "a", {
  value: "3",
  writable: true,
  configurable: true,
  enumerable: true,
});
console.log("对象长度2", Object.keys(obj));
// seal会使用Object.preventExtensions(..)创建封闭控件
// 并把所有现有属性标记为 configurable: false

// Object.seal(obj);
// console.log("封闭属性", Object.getOwnPropertyDescriptors(obj));

// 冻结对象
// Object.freeze(obj);
// console.log("冻结属性", Object.getOwnPropertyDescriptors(obj));

obj.test = "新测试";
Object.defineProperty(obj, "test2", {
  get: function () {
    return this.test + "111";
  },
  enumerable: true,
});
let arr = [1, 2, 3, 4, 5];
let someIndex = arr.some((item) => {
  return item === 1;
});
let someIndex2 = arr.every((item) => {
  return item > 0;
});
console.log("some结果", someIndex);
console.log("every结果", someIndex2);
console.log("能不能编辑", obj.test2);
