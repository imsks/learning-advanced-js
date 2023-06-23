// // let timerId = setTimeout(function tick() {
// //     console.log('Tick')
// //     timerId = setTimeout(tick, 1000)
// // }, 1000)

// // // With setTimeout
// // function printNumbers(from, to) {
// //     let curr = from

// //     let timeId = setTimeout(function counter() {
// //         console.log(curr)

// //         curr++

// //         if (curr > to) return

// //         timeId = setTimeout(counter, 1000)
// //     }, 1000)
// // }

// // printNumbers(2, 5)

// // With setInterval
// function printNumbers(from, to) {
//     let curr = from

//     let timerId = setInterval(() => {
//         console.log(curr)

//         curr++

//         if (curr > to) clearInterval(timerId)
//     }, 1000)
// }

// printNumbers(2, 5)