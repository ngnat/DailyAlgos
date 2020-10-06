// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"

var longestPalindrome = function(array) {

    let maxSubLength = 0
    let maxSubStart = 0
    for ( let i = 0; i < array.length; i++){
        let centerForOdd = checkPalindrome(array, i, i)
        let centerForEven = checkPalindrome(array, i, i + 1)
        let longestSubStrLength = Math.max(centerForEven, centerForOdd)
        if (longestSubStrLength > maxSubLength){
            maxSubLength = longestSubStrLength
            maxSubStart = i - Math.floor((maxSubLength - 1) / 2)
        }
    }
    return array.substr(maxSubStart, maxSubLength)
}

function checkPalindrome(array, left, right){
    while (array[left] === array[right] && right < array.length && left >= 0 ){
            left--
            right++
        }
    return (right - left -1)
}