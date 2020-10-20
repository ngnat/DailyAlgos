// Share
// Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
// A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

// Example:
// Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
//  "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

function concatenate(words){
    words.sort((a,b) => a.length - b.length)
    let dict = new Set()
    let results = []

    for(let word of words){
        if(wordBreak(word)){
            results.push(word)
        }
        dict.add(word)
    }

    return results

    function wordBreak(word){
        let dp = new Array(word.length + 1).fill(false)
        dp[0] = true
        for (let start = 1; start <= word.length; start++){
            for (let end = 0; end < start; end++){
                let sliced = word.slice(start, end)
                if(dict.has(sliced)){
                    dp[end] = true
                    break
                }
            }
        }
        return dp.pop()
    }
}