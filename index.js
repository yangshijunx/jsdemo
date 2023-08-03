class MyPromise {
  constructor(executor) {
    // 初始化值，比如promise状态
    this.initValue();
    // 绑定this
    this.initBind();
    // 如果是直接抛出错误需要做区分
    try {
      // 执行传进来的函数
      executor(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }
  initBind() {
    // 初始化this
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    // 执行传进来的函数
  }
  initValue() {
    // 初始化值
    this.PromiseResult = null; // 结果
    this.PromiseStatus = "pending";
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
  }
  resolve(value) {
    // 保证promise的状态只有第一次修改生效
    if (this.PromiseStatus !== "pending") return;
    // 执行resolve需要改变状态为fulfilled
    this.PromiseStatus = "fulfilled";
    // 赋值结果
    this.PromiseResult = value;
    // 执行保存的回调
    while (this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.PromiseStatus);
    }
  }
  reject(value) {
    // 保证promise的状态只有第一次修改生效
    if (this.PromiseStatus !== "pending") return;
    // 执行resolve需要改变状态为fulfilled
    this.PromiseStatus = "rejected";
    // 赋值结果
    this.PromiseResult = value;
    // 执行保存的回调
    while (this.onRejectedCallbacks.length) {
      this.onRejectedCallbacks.shift()(this.PromiseStatus);
    }
  }
  then(onFulfilled, onRejected) {
    // 接受两个回调
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (val) => val;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    if (this.PromiseStatus === "fulfilled") {
      onFulfilled(this.PromiseResult);
    } else if (this.PromiseStatus === "rejected") {
      onRejected(this.PromiseResult);
    } else if (this.PromiseStatus === "pending") {
      // 如果状态为pending则保存两个回调
      this.onFulfilledCallbacks.push(onFulfilled.bind(this));
      this.onRejectedCallbacks.push(onRejected.bind(this));
    }
  }
}
let p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("测试resolve");
  }, 1000);
})
  .then(
    (res) => console.log("成功", res),
    (rej) => console.log("失败", rej)
  )
  .then((res) => console.log("成功2", res));
console.log("p1", p1);
