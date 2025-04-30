// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let array = []
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            array.push(char)
        } else {
            if (array.pop() !== map[char]) return false
        }
    }

    return array.length === 0
}
