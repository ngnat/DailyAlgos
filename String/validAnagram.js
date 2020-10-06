
// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false 
    let hash = {}
    
    for (let letter of s ){
        hash[letter] = ++hash[letter] || 1
    }
    
    for (let letter of t){
        if (!hash[letter]) return false
        hash[letter] --
    }
    return true
    }