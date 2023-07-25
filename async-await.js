// async function f() {
//     return 1
// }

// f().then(console.log)

async function f() {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done")
        }, 1000)
    })

    let result = await promise
    console.log(result)
}

f()