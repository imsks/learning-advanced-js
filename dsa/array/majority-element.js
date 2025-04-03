/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {}
    let majorityElem

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (map[num]) {
            map[num] = map[num] + 1
        } else {
            map[num] = 1
        }

        if (map[num] >= nums.length / 2) majorityElem = num
    }

    return majorityElem
}
