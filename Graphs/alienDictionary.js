// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

//PLAN:
// create hash map to 
// create a helper function that checks whether two words are in valid order
// iterate throughout the words array, starting at the first index 
// each iteration, call helper function, passing in the word that is iterated on and the word previous to it
// if the helper function returns false, the function will return false

  //Helper Function
    //first find the length the shortest word
    //establish a for loop that iterates throughout the length of the shortest word
    //at each iteration, check the letter in both of the words and locate the index of both those letters in the alienDictionary
    //if the index of letter of the first word in the first alienDictionary is greater than the index of the letter of the second word, return false; if not, return true
//EXAMPLES:
    // let words = ["word","world","row"]
    // let order = "worldabcefghijkmnpqstuvxyz"
    
    //  let words = ["hello","leetcode"]
    //  let order = "hlabcdefgijkmnopqrstuvwxyz"
    
    function alienDictionary(words, order){
     let letters = {}
      for (let i = 0; i < order.length; i++){
        letters[order[i]] = i
      }
    
      for(let i = 1; i< words.length; i++){
        if(!checkValid(words[i-1], words[i], letters)){
          return false
        }
      }
    
      return true
    
    }
    
    alienDictionary(words, order)
    
    function checkValid(first, second, letters){
      let size = Math.min(first.length, second.length)
      for (let i = 0; i < size; i++){
        let firstWordIdx = letters[first[i]]
        let secondWordIdx = letters[second[i]]
        if (firstWordIdx < secondWordIdx){
          return true
        } else if (firstWordIdx > secondWordIdx) {
          return false
        }
      }
      return first.length <= second.length
    }