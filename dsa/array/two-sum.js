// ✅ Question: Two Sum
// Given an array of integers nums and an integer target,
// return the indices of the two numbers such that they add up to the target.

// 💼 Real-life Use Case (Full-stack):
// Imagine you have a list of product prices and a user sets a budget —
// You need to suggest two products that exactly fit the budget.
// Could be useful in:
// 	•	E-commerce recommendation systems
// 	•	Budgeting apps
// 	•	Coupon matching tools

// 💡 Basic Hint (not too much):
// 	•	You need a way to check if the “complement” (target - current number) has already appeared.
// 	•	Try using a hash map for fast lookups.

// // Brute-force
// var twoSum = function (nums, target) {
//     let results
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const num = nums[i] + nums[j]

//             if (num === target) {
//                 results = [i, j]
//             } else if (num > target) continue
//         }
//     }

//     return results
// }
