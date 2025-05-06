// 844. Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let finalStringS = []
    let finalStringT = []

    for (let char of s) {
        if (char === "#") finalStringS.pop()
        else finalStringS.push(char)
    }

    for (let char of t) {
        if (char === "#") finalStringT.pop()
        else finalStringT.push(char)
    }

    return finalStringS.join("") === finalStringT.join("")
}

console.log(backspaceCompare("a#c", "b"))
