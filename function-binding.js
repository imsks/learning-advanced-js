const user = {
    name: "Sachin",
    sayHi: function () {
        console.log(`Hello ${this.name}`)
    }
}

// const func = user.sayHi

setTimeout(() => user.sayHi(), 1000)

// console.log(user.sayHi())
