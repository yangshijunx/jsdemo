const arr = [[1, 2], [3, 4], [5, 6]]
let newArr = arr.reduce((pre, item) => {
    return pre.concat(item)
}, [])
console.log(newArr)
// 先加后*2
function add(a) {
    return a + 2
}
function multiply(a) {
    return a * 2
}
function reduceFunction() {
    const args = [].slice.apply(arguments);
    console.log("结构的函数", args)
    return function (x) {
        return args.reduce((res, func) => {
            return func(res)
        }, x)
    }
}
let resFunction = reduceFunction(add, multiply)
console.log(resFunction(11))