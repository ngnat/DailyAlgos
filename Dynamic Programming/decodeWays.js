// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.

 

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "0"
// Output: 0
// Explanation: There is no character that is mapped to a number starting with '0'. We cannot ignore a zero when we face it while decoding. So, each '0' should be part of "10" --> 'J' or "20" --> 'T'.
// Example 4:

// Input: s = "1"
// Output: 1

function numDecode(s){
    let memo = new Map()
    function helper(idx){
        if(idx === s.length){
            return 1
        }
        if(idx > s.length){
            return 0
        }
        if(memo.has(idx)) {
            return memo.get(idx)
        }
        let count = 0
        let oneChar = s.slice(idx, idx + 1)
        let twoChar = s.slice(idx, idx + 2)
        if(oneChar !== '0'){
            count += helper(idx +1)
        }
        if(twoChar[0] !== '0' && +twoChar <= 26){
            count += helper(idx + 2)
        }
        memo.set(idx, count)
        return count
    }
    return helper(0)
}