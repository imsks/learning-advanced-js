// // function makeCounter() {
// //     let count = 0

// //     return function () {
// //         return count++
// //     }
// // }

// // let counter = makeCounter()
// // let counter2 = makeCounter()

// // console.log(counter()) // 0
// // console.log(counter()) // 1
// // console.log(counter()) // 2

// function makeWorker() {
//     // let name = "Pete"

//     return function () {
//         console.log(name)
//     }
// }

// let name = "John"

// // create a function
// let work = makeWorker()

// // call it
// work() 

function sum(a) {
    return function (b) {
        return a + b
    }
}

console.log(sum(5)(-1))