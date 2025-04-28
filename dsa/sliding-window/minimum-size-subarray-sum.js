// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0
    let minSize = Infinity
    let currentSum = 0

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right]

        while (currentSum >= target) {
            minSize = Math.min(minSize, right - left + 1)
            currentSum -= nums[left]
            left++
        }
    }

    return minSize === Infinity ? 0 : minSize
}
