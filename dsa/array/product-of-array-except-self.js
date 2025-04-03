/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let answer = []

    let runningProduct = 1
    for (let i = 0; i < nums.length; i++) {
        answer[i] = runningProduct
        runningProduct *= nums[i]
    }

    runningProduct = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= runningProduct
        runningProduct *= nums[i]
    }

    return answer
}
