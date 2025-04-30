// /**
//  * @param {Function} func
//  * @param {number} wait
//  * @return {Function}
//  */
// export default function debounce(func, wait) {
//     let timer

//     return function (...args) {
//         if (timer) clearTimeout(timer)

//         timer = setTimeout(() => {
//             func.apply(this, args)
//         }, wait)
//     }
// }

/**
 * Follow up
1. Debounce with a cancel() method to cancel delayed invocations and a flush() method to immediately invoke them.
2. Implement throttle, which is similar to debounce but a little different.
 */

function debounce(func, wait) {
    let timer
    let context
    let lastArgs

    function debounced(...args) {
        context = this
        lastArgs = args

        if (timer) clearTimeout(timer)

        timer = setTimeout(() => {
            func.apply(context, lastArgs)
            timer = null
        }, wait)
    }

    debounced.cancel = function () {
        if (timer) clearTimeout(timer)
        timer = null
    }

    debounced.flush = function () {
        if (timer) {
            clearTimeout(timer)
            func.apply(context, lastArgs)
            timer = null
        }
    }

    return debounced
}

let counter = 0
function increment() {
    counter++
    console.log("Incremented!", counter)
}

const debouncedIncrement = debounce(increment, 1000)

// Try calling it multiple times
debouncedIncrement()
debouncedIncrement()

// Try canceling or flushing later
// debouncedIncrement.cancel()
// debouncedIncrement.flush()
