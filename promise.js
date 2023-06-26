// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => reject("done!"), 1000)
// })

// // resolve runs the first function in .then
// promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log("error", error) // doesn't run
// )

function delay(ms) {
    // your code
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

delay(3000).then(() => console.log('runs after 3 seconds'))