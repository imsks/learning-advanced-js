var characterReplacement = function (s, k) {
    let left = 0,
        maxFreq = 0,
        maxLength = 0
    const map = new Map()

    for (let right = 0; right < s.length; right++) {
        const char = s[right]
        map.set(char, (map.get(char) || 0) + 1)

        maxFreq = Math.max(maxFreq, map.get(char))

        // If replacements needed > k, shrink window
        if (right - left + 1 - maxFreq > k) {
            const leftChar = s[left]
            map.set(leftChar, map.get(leftChar) - 1)
            left++
        }

        // valid window — update max length
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
}
