// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0
    let right = 0
    let maxLength = 0
    const map = new Map()

    while (right < s.length) {
        const char = s[right]

        if (map.has(char)) {
            left = Math.max(left, map.get(char) + 1)
        }

        map.set(char, right)
        right++
        maxLength = Math.max(maxLength, right - left)
    }

    return maxLength
}
