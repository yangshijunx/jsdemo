// flat函数-数组扁平化
const arr = [1, 1.1, 1.2, [2, [2.1, 2.2, [2.11]]]]
function flat(arr) {
    // console.log("数组", arr)
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] instanceof Array) {
            newArr = newArr.concat(flat(arr[index]))
        } else {
            newArr.push(arr[index])
        }
    }
    return newArr
}
function flat2(arr) {
    return arr.reduce((res, item) => {
        if (Array.isArray(item)) {
            return res.concat(flat(item))
        } else {
            return res.concat(item)
        }
    }, [])
}
console.log("flat结果", flat(arr))
console.log("flat2结果", flat2(arr))
// api只能展开一层
console.log("展开api", arr.flat())