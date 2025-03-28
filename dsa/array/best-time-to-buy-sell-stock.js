// // Brute-force
// var maxProfit = function (prices) {
//     let maxProfit = 0

//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             const result = prices[j] - prices[i]

//             if (maxProfit < result) {
//                 maxProfit = result
//             }
//         }
//     }

//     return maxProfit
// }

// Solution 2
var maxProfit = function (prices) {
    let maxProfit = 0
    let minPrice = prices[0]

    for (let i = 0; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i]
        }

        if (maxProfit < prices[i] - minPrice) {
            maxProfit = prices[i] - minPrice
        }
    }

    return maxProfit
}
