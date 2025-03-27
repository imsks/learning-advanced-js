// // // // Explain the Event Loop in Node.js
// // // console.log("Start")

// // // setTimeout(() => console.log("Timeout"), 0)
// // // setImmediate(() => console.log("Immediate"))
// // // Promise.resolve().then(() => console.log("Promise"))
// // // console.log("End")

// // // /**
// // //  * Start
// // //  * End
// // //  * Promise
// // //  * Immediate
// // //  * Timeout
// // //  */

// // // 2. What are Microtasks in Node.js?
// // // Microtasks are High Priority callbacks.
// // // promise.then(), catch, finally

// // console.log("Start")

// // setTimeout(() => console.log("setTimeout"), 0)
// // setImmediate(() => console.log("setImmediate"))
// // process.nextTick(() => console.log("nextTick"))
// // Promise.resolve().then(() => console.log("Promise"))

// // console.log("End")

// // /**
// //  * Start
// //  * End
// //  * nextTick
// //  * Promise
// //  * setImmediate
// //  * setTimeout
// //  */

// // Worker threads are for parallel computing inside node.
// // each has its own Event loop and memory

// const { Worker } = require("worker_threads")

// function runWorker() {
//     return new Promise((resolve, reject) => {
//         const worker = new Worker("./worker.js")
//         worker.on("message", (data) => resolve(data))
//         worker.on("error", reject)
//         worker.on("exit", (code) => {
//             if (code !== 0)
//                 reject(new Error(`Worker stopped with code ${code}`))
//         })
//     })
// }

// runWorker().then(console.log).catch(console.log)

// Child process create a new Node process.
