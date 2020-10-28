// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]
// Example 2:

// Input:
// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// Output:
// [
//   "pine apple pen apple",
//   "pineapple pen apple",
//   "pine applepen apple"
// ]
// Explanation: Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input:
// s = "catsandog"
// wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output:
// []

function wordBreak(s, wordDict){
    let dict = new Set(wordDict)
    let foundCombos = {}

    let helper(start){
        if (start === s.length ) return [""]
        if (start in foundCombos) return foundCombos[start]
        let list = []
        for (let end = start + 1; end <=s.length; end++){
            let word = s.slice(start, end)
            if (word in dict){
                let combos = helper(end)
                combos.forEach((combo) => list.push([word, ... combo]))
            }
        }
        foundCombos[start] = list
        return list
    }

    return helper(0).map((combos) => combos.join(" "))

}
