// // // // // // 1. Difference between var, let, and const
// // // // // function demo() {
// // // // //     if (true) {
// // // // //         var a = 10
// // // // //         let b = 20
// // // // //         const c = 30
// // // // //     }

// // // // //     console.log(a)
// // // // //     console.log(b)
// // // // //     console.log(c)
// // // // // }

// // // // // demo()

// // // // // Hoisting - JavaScript “hoists” declarations to the top of their scope (but not initializations).
// // // // // var is initialized as undefined but let is hoisted but not initialized.

// // // // // Closure

// // // // // function outer() {
// // // // //     let count = 0

// // // // //     return function inner() {
// // // // //         count++
// // // // //         console.log("Count is ", count)
// // // // //     }
// // // // // }

// // // // // const counter = outer()

// // // // // counter()
// // // // // counter()

// // // // // function createUser(name) {
// // // // //     return {
// // // // //         getName: () => name,
// // // // //         changeName: (newName) => (name = newName)
// // // // //     }
// // // // // }

// // // // // const user1 = createUser("Sachin")
// // // // // console.log(user1.getName())

// // // // // user1.changeName("Dhoni")
// // // // // console.log(user1.getName())

// // // // // Questions

// // // // // 1.Classic Closure Trap

// // // // // for (var i = 0; i < 3; i++) {
// // // // //     setTimeout(() => console.log(i), 100)
// // // // // }
// // // // /**
// // // //  * Output
// // // //  *
// // // //  */

// // // // // // Q3: Timer Factory
// // // // // function createTimer(name) {
// // // // //     let seconds = 0

// // // // //     return function tick() {
// // // // //         seconds++
// // // // //         console.log(`${name}: ${seconds}s`)
// // // // //     }
// // // // // }

// // // // // const gameTimer = createTimer("Game")
// // // // // gameTimer()
// // // // // gameTimer()

// // // // // function outer() {
// // // // //     let a = 5

// // // // //     return function inner() {
// // // // //         console.log(a)
// // // // //         a++
// // // // //     }
// // // // // }

// // // // // const fn = outer()
// // // // // fn() // 5
// // // // // fn() // 5

// // // // function createTimer(name) {
// // // //     let seconds = 0

// // // //     return function tick() {
// // // //         seconds++
// // // //         console.log("name ", name, " : ", "seconds ", seconds)
// // // //     }
// // // // }

// // // // const quizTimer = createTimer("Quiz")
// // // // setInterval(quizTimer, 1000)

// // // // Implement once(fn)

// // // function once(fn) {
// // //     let called = false
// // //     let result

// // //     return function (...args) {
// // //         if (!called) {
// // //             result = fn.apply(this, args)
// // //             called = true
// // //         }

// // //         return result
// // //     }
// // // }

// // // const init = once(() => console.log("Initialized"))
// // // init()
// // // init()

// // /**
// //  * 	6.	You have three async functions: getUser(), getPosts(userId), and getComments(postId). How would you fetch all data in clean code?
// // 	7.	What happens if you await a function that throws an error? How do you handle it?
// // 	8.	What does Promise.all() do? When would you use it?
// // 	9.	Can you use await outside an async function? What happens if you do?
// // 	10.	What’s the difference between Promise.all(), Promise.race(), and Promise.allSettled()?

// //     🧩 Deep-Dive / Tricky Ones
// // 	11.	What’s a “callback hell”? How do Promises or async/await help prevent it?
// // 	12.	What’s the output of this code?
// //     console.log("Start");
// //     setTimeout(() => console.log("Timeout"), 0);
// //     Promise.resolve().then(() => console.log("Promise"));
// //     console.log("End");

// //     13.	Can you write a custom function that returns a Promise?
// // 	14.	What’s the difference between microtasks and macrotasks in the event loop?
// // 	15.	When would you choose Promise.then() over async/await in real-world code?

// //     ✨ Bonus: Live Coding Prompts
// // 	•	Implement a fake wait(ms) function that returns a Promise.
// // 	•	Convert a callback-style function into a promise-based one using util.promisify() (Node.js).
// // 	•	Chain three async operations using both .then() and async/await — show both versions.
// //  */

// // // 6.	You have three async functions: getUser(), getPosts(userId), and getComments(postId). How would you fetch all data in clean code?

// // // async function getUser() {}
// // // async function getPosts(userId) {}
// // // async function getComments(postId) {}

// // // const init = async () => {
// // //     try {
// // //         const userId = await getUser() // returns a userId

// // //         const posts = await getPosts(userId) // returns array of posts

// // //         // Fetch comments for all posts in parallel
// // //         const comments = await Promise.all(
// // //             posts.map((post) => getComments(post.id)) // 👈 assuming each post has an `.id`
// // //         )
// // //     } catch (e) {
// // //         console.log(e)
// // //     }
// // // }

// // /* 8.	What does Promise.all() do? When would you use it?

// // Promise.all() takes an array of promises and returns a single promise that:
// // 	•	✅ Resolves when all promises resolve
// // 	•	❌ Rejects immediately if any one fails (short-circuits)

// // If you want to wait for all promises to finish, even if some fail, use Promise.allSettled() instead.
// // */

// // /**
// //  * Can you use await outside an async function? What happens if you do?
// //  * ❌ No, you cannot use await outside an async function — it will throw a SyntaxError in most environments.
// //  * 🔥 In latest versions of Node.js (v14.8+) and modern browsers (inside modules):

// //     You can use await at the top level — this is called top-level await.
// //     // top-level await works in ES modules
// //     const data = await fetch("https://api.com/data");
// //     console.log(data);
// //  */

// // /**
// //  * 10.	What’s the difference between Promise.all(), Promise.race(), and Promise.allSettled()?
// //  * Promise.all() -
// //  * Waits for all promises to resolve,
// // Fails immediately if any one promise rejects
// // Promise.all([p1, p2, p3])
// // 🧠 Use when: All results are required — like loading user, posts, and notifications together.

// // 2. Promise.race()
// // Returns as soon as the first promise settles (resolve or reject)
// // Promise.race([p1, p2, p3])
// // 🧠 Use when: You want to timeout an API call or pick the fastest response.
// // Promise.race([
// //   fetchData(),
// //   timeout(3000) // if fetch is slow, timeout wins
// // ])

// // 🔹 3. Promise.allSettled()
// // Waits for all promises to finish,
// // But doesn’t fail if any reject — it gives the result of each
// // Promise.allSettled([p1, p2, p3])

// // 🧠 Use when: You care about all results, even failures (e.g. uploading multiple files).

// //  */

// // /**
// //  * 13. Can you write a custom function that returns a Promise?
// //  *
// // function customPrimise() {
// //     return new Promise((resolve, reject) => {
// //         resolve(1)
// //     })
// // }

// //  */

// // /**
// //  * 14.	What’s the difference between microtasks and macrotasks in the event loop?
// //  * 1. Run synchronous code (call stack)
// // 2. Execute all microtasks (Promise callbacks, etc.)
// // 3. Execute one macrotask (setTimeout, etc.)
// // 4. Repeat
// // Microtasks = urgent follow-up texts you reply to before checking new notifications
// // Macrotasks = scheduled reminders that fire after you finish those replies
// //  */

// // /**
// //  * 15.	When would you choose Promise.then() over async/await in real-world code?
// //  *.then() = You’re registering interest in something (“when this is done, do this”)
// // await = You’re pausing execution and waiting actively
// //  */

// // /* Implement a fake wait(ms) function that returns a Promise.

// // function wait(ms) {
// //     return new Promise((resolve) => setTimeout(resolve, ms))
// // }

// // ;(async () => {
// //     console.log("Start")
// //     await wait(2000)
// //     console.log("Complete")
// //     console.log("Ending")
// // })()

// // */

// // // Prototype Chain

// // // const person = {
// // //     name: "Sachin"
// // // }

// // // const student = Object.create(person)
// // // console.log(Object.getPrototypeOf(student))

// // // function Animal() {}

// // // Animal.prototype.speak = function () {
// // //     console.log("Animal speaks")
// // // }

// // // const dog = new Animal()
// // // dog.speak()

// // // const obj = Object.create(null)
// // // const obj2 = Object.create({
// // //     name: "Sachin"
// // // })

// // // console.log(obj.toString())
// // // console.log(obj2.toString())

// // // Debounce

// // function debounce(func) {
// //     let timer

// //     return function (...args) {
// //         clearTimeout(timer)

// //         timer = setTimeout(() => {
// //             func.apply(this, args)
// //         }, 200)
// //     }
// // }

// // const log = () => console.log("Logged")
// // const exec = debounce(log)

// // setTimeout(exec, 0)
// // setTimeout(exec, 100)
// // setTimeout(exec, 400)

// // Throttle
// function throttle(func, delay) {
//     let shouldWait = false

//     return function (...args) {
//         if (!shouldWait) {
//             func.apply(this, args)
//             shouldWait = true

//             setTimeout(() => {
//                 shouldWait = false
//             }, delay)
//         }
//     }
// }
// const log = () => console.log("Logged")
// const exec = throttle(log, 200)

// setInterval(exec, 50)
