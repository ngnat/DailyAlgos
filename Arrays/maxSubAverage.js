
// Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

// Example 1:

// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
var findMaxAverage = function(nums, k) {
    let max = -Infinity
    for (let i = 0; i < nums.length - k + 1; i++){
        let currSum = 0
        for (let j = 0; j < k; j++){
            currSum+= nums[i+j]
        }
        max = Math.max(currSum/k, max)
    }
       return max
   };