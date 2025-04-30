/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
    if (typeof callbackFn !== "function") {
        throw new TypeError("callbackFn should be function")
    }

    const array = this
    let accumulator
    let startIndex

    if (arguments.length >= 2) {
        accumulator = initialValue
        startIndex = 0
    } else {
        if (!array.length) {
            throw new TypeError("Array can't be empty")
        }

        accumulator = array[0]
        startIndex = 1
    }

    for (let index = startIndex; index < array.length; index++) {
        if (!array[index]) continue
        accumulator = callbackFn(accumulator, array[index], index, array)
    }

    return accumulator
}
