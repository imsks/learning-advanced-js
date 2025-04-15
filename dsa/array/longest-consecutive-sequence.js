// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let longestSequence = 0

    const set = new Set(nums)

    for (let num of set) {
        if (!set.has(num - 1)) {
            let length = 1
            while (set.has(num + length)) length++

            if (length > longestSequence) longestSequence = length
        }
    }

    return longestSequence
}
