// // Promise.all([
// //     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
// //     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
// //     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// // ]).then(console.log)

// let names = ['iliakan', 'remy', 'jeresig']

// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`))

// Promise.all(requests)
//     .then(responses => responses)
//     // map array of responses into an array of response.json() to read their content
//     .then(responses => Promise.all(responses.map(r => r.json())))
//     // all JSON answers are parsed: "users" is the array of them
//     .then(users => users.forEach(console.log))

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log).catch(console.log)