// 122. Best Time to Buy and Sell Stock II
// Solved
// Medium
// Topics
// Companies
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0

    for (let i = 1; i < prices.length; i++) {
        const result = prices[i] - prices[i - 1]

        if (result > 0) profit += result
    }

    return profit
}
