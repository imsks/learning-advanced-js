function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hi")
        }, 2000)
    })
}

(async () => {
    const result = await delay()
    console.log(result)
})()