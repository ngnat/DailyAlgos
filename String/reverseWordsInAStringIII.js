// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

var reverseWords = function(s) {
    let words = s.split(" ")
    for (let i = 0; i < words.length; i++){
        words[i] = wordReverse(words[i])
    }
    return words.join(" ")
    
};

function wordReverse(word){
    word = word.split("")
    let i = 0
    let j = word.length - 1
    while(i < j){
        let temp = word[j]
        word[j] = word[i]
        word[i] = temp
        i++
        j--
    }
    return word.join('')
}