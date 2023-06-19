const array = [1, 2, 3, 4]

Array.prototype.sum = function () {
    return this.reduce((prev, curr) => prev + curr)
}

console.log(array.sum())