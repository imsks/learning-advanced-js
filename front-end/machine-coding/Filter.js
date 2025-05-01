// Implement Array.prototype.myFilter from scratch.
// Array.prototype.myFilter = function (callbackFn, thisArg) {}
// callbackFn.call(thisArg, currentValue, index, array)

Array.prototype.myFilter = function (callbackfn, thisArg) {
    const context = this
    const filteredArray = []

    for (let index = 0; index < context.length; index++) {
        const item = context[index]

        const isTrue = callbackfn.call(thisArg, item, index, context)

        if (isTrue) filteredArray.push(item)
    }

    return filteredArray
}

console.log([1, 2, 3, 4].myFilter((x) => x % 2 === 0)) // [2, 4])
console.log(["a", "b", "c"].myFilter((char, i) => i !== 1)) // ['a', 'c']
console.log([].myFilter((x) => true)) // []
console.log([0, false, "", "hello"].myFilter(Boolean)) // ['hello'])
