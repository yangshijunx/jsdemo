let obj = {
    name: "test",
    age: 19,
}
let value = 18
Object.defineProperty(obj, 'age', {
    enumerable: true,
    configurable: true,
    get() {
        console.log("obj.age.get")
        return value
    },
    set(newVal) {
        console.log("obj.age.set")
        value = newVal
    }
})
console.log("value", obj.age)
obj.age = 1
console.log("value2", obj.age)