// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"

function reverseVowels(s){
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let stack = []
    for (let i = 0; i < s.length; i++){
        if(vowels.indexOf(s[i]) !== -1){
            stack.push(s[i])
        }
    }
    let ans = []
    for (let i = 0; i< s.length; i++){
        if(vowels.indexOf(s[i]) !== -1){
            ans.push(stack.pop())
        } else {
            ans.push(s[i])
        }
    }
    return ans.join('')
}