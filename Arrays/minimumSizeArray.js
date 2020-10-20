// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// Example: 

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.

var minSubArrayLen = function(s, nums) {
    let left = 0
    let right = 0
    let tempSum = 0
    let minLen = Infinity
    
    while (left < nums.length){
        if (tempSum < s && right < nums.length){
            tempSum+= nums[right]
            right++
        } else if (tempSum >= s){
            minLen = Math.min(minLen, right - left)
            tempSum -= nums[left]
            left++
        } else {
            break
        }
    }
    
        return minLen === Infinity ? 0 : minLen;
  };