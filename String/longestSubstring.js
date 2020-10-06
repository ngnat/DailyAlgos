// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

var lengthOfLongestSubstring = function(s) {
    let max = 0
    let i = 0
    let j = 0
    let hash = new Map()
    
    while (j < s.length){
        if (!hash.has(s[j])){
            hash.set(s[j], i)
            max = Math.max(max, hash.size)
            j++
        } else {
            hash.delete(s[i])
            i++
        }
    }
     
     return max
 };