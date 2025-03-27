const { parentPort } = require("worker_threads")

// heavy task
let sum = 0
for (let i = 0; i < 1e9; i++) sum += i

parentPort.postMessage(`Sum is: ${sum}`)
