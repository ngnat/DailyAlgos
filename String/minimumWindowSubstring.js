// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
var minWindow = function(s, t) {
  
    let tMap = new Map()
    let sMap = new Map()
    
    let left = 0
    let right = 0
    let minLen = Infinity
    let start = 0
    let match = 0
    
    
    for (let i = 0; i<t.length; i++){
        if (tMap.has(t[i])){
            tMap.set(t[i], tMap.get(t[i]) + 1)
        } else {
            tMap.set(t[i], 1)
        }
    }
    
    while (right < s.length){
        if(tMap.has(s[right])){
            if (sMap.has(s[right])){
                sMap.set(s[right], sMap.get(s[right]) + 1)
            } else {
                sMap.set(s[right], 1)
            }
            if (sMap.get(s[right]) === tMap.get(s[right])){
                match++
            }
        }
        right++
        while (match === tMap.size){
            if (right - left < minLen){
                start = left
                minLen = right - left
            }
            if(tMap.has(s[left])){
                sMap.set(s[left], sMap.get(s[left]) - 1)
                if (sMap.get(s[left]) < tMap.get(s[left])){
                    match = match - 1
                }
            }
            left++
        }
    }
    
    return minLen === Infinity ? "" : s.substring(start, minLen + start)
}
  



var minWindow = function(s, t) {
  
    let i = 0
    let j = i+1 
  
    let tSplit = t.split("")
    let maxString = s
    
    if (s === t) return s
    if(t.length === 1) {
        if(s.indexOf(t) >=0) {
            return t
        }
    }
        
    while (j < s.length){
        let subString = s.slice(i, j + 1)
        if (!tSplit.every((val) => subString.indexOf(val) >=0)){
            j++
        } else {
            console.log(subString, 'subString')
            if(subString.length < maxString.length){
                maxString = subString
            }
            i++
        }
    }
    if (maxString === s) {
        return ''
    } else {
        return maxString
    }
   
};