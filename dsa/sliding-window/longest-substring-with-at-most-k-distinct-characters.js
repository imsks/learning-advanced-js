// 📋 Problem:

// Given a string s and an integer k, return the length of the longest substring that contains at most k distinct characters.

// 📚 Example:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: "ece" is the longest substring with at most 2 distinct characters.

const lengthOfLongestSubstringKDistinct = (s, k) => {
    let left = 0
    let map = new Map()
    let maxLength = 0

    for (let right = 0; right < s.length; right++) {
        const char = s[right]

        map.set(char, (map.get(char) || 0) + 1)

        while (map.size > k) {
            const charLeft = s[left]
            map.set(charLeft, map.get(charLeft) - 1)
            if (map.get(charLeft) === 0) {
                map.delete(charLeft)
            }

            left++
        }

        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
}

console.log(lengthOfLongestSubstringKDistinct("eceba", 2))
