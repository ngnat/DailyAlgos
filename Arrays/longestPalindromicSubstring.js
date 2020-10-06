 function longestPalindrome(string) {
    let maxSubLength = 0
    let maxSubStart = 0
    for ( let i = 0; i < string.length; i++){
        let centerForOdd = checkPalindrome(string, i, i)
        let centerForEven = checkPalindrome(string, i, i + 1)
        let longestSubStrLength = Math.max(centerForEven, centerForOdd)
        if (longestSubStrLength > maxSubLength){
            maxSubLength = longestSubStrLength
            maxSubStart = i - Math.floor((maxSubLength - 1) / 2)
        }
    }
    return string.substr(maxSubStart, maxSubLength)
}

function checkPalindrome(string, left, right){
    while (string[left] === string[right] && right < string.length && left >= 0 ){
            left--
            right++
         
        }
    return (right - left -1)
}



checkPalindrome("babad",1,)