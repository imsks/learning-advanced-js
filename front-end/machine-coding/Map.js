// Implement Array.prototype.myMap from scratch.
// Array.prototype.myMap = function (callbackFn, thisArg) {}
// callbackFn.call(thisArg, currentValue, index, array)

Array.prototype.myMap = function (callbackfn, thisArg) {
    const context = this
    const mappedArray = []

    for (let index = 0; index < context.length; index++) {
        const item = context[index]

        mappedArray.push(callbackfn.call(thisArg, item, index, context))
    }

    return mappedArray
}

console.log([1, 2, 3].myMap((x) => x * 2)) // [2, 4, 6]
console.log(["a", "b", "c"].myMap((char, i) => char + i)) // ['a0', 'b1', 'c2']
console.log([].myMap((x) => x + 1)) // []
console.log([null, undefined, 0].myMap(String)) // ['null', 'undefined', '0']
