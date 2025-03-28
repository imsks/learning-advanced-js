// // // // 1. Difference between var, let, and const
// // // function demo() {
// // //     if (true) {
// // //         var a = 10
// // //         let b = 20
// // //         const c = 30
// // //     }

// // //     console.log(a)
// // //     console.log(b)
// // //     console.log(c)
// // // }

// // // demo()

// // // Hoisting - JavaScript “hoists” declarations to the top of their scope (but not initializations).
// // // var is initialized as undefined but let is hoisted but not initialized.

// // // Closure

// // // function outer() {
// // //     let count = 0

// // //     return function inner() {
// // //         count++
// // //         console.log("Count is ", count)
// // //     }
// // // }

// // // const counter = outer()

// // // counter()
// // // counter()

// // // function createUser(name) {
// // //     return {
// // //         getName: () => name,
// // //         changeName: (newName) => (name = newName)
// // //     }
// // // }

// // // const user1 = createUser("Sachin")
// // // console.log(user1.getName())

// // // user1.changeName("Dhoni")
// // // console.log(user1.getName())

// // // Questions

// // // 1.Classic Closure Trap

// // // for (var i = 0; i < 3; i++) {
// // //     setTimeout(() => console.log(i), 100)
// // // }
// // /**
// //  * Output
// //  *
// //  */

// // // // Q3: Timer Factory
// // // function createTimer(name) {
// // //     let seconds = 0

// // //     return function tick() {
// // //         seconds++
// // //         console.log(`${name}: ${seconds}s`)
// // //     }
// // // }

// // // const gameTimer = createTimer("Game")
// // // gameTimer()
// // // gameTimer()

// // // function outer() {
// // //     let a = 5

// // //     return function inner() {
// // //         console.log(a)
// // //         a++
// // //     }
// // // }

// // // const fn = outer()
// // // fn() // 5
// // // fn() // 5

// // function createTimer(name) {
// //     let seconds = 0

// //     return function tick() {
// //         seconds++
// //         console.log("name ", name, " : ", "seconds ", seconds)
// //     }
// // }

// // const quizTimer = createTimer("Quiz")
// // setInterval(quizTimer, 1000)

// // Implement once(fn)

// function once(fn) {
//     let called = false
//     let result

//     return function (...args) {
//         if (!called) {
//             result = fn.apply(this, args)
//             called = true
//         }

//         return result
//     }
// }

// const init = once(() => console.log("Initialized"))
// init()
// init()
