// // const user = { name: "A" }

// // const admin = user

// // admin.name = "B"

// // console.log(user, admin)

// const user = { name: "A" }

// const clone = {}

// for (let key in user) {
//     clone[key] = user[key]
// }

// console.log(clone === user)

let user = { name: "John" }

let permissions1 = { canView: true }
let permissions2 = { canEdit: true }

Object.assign(user, permissions1, permissions2)

console.log(user)
