// function curry(func) {
//     return function (a) {
//         return function (b) {
//             return func(a, b)
//         }
//     }
// }

function curry(a) {
    return function (b) {
        if (!b) return a

        return curry(a + b)
    }
}

const curr = curry(1)(2)(3)(4)()

console.log(curr)