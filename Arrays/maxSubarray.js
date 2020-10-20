// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-2147483647]
// Output: -2147483647

var maxSubArray = function(nums) {
    
    let dp = new Array(nums.length)
    dp[0] = nums[0]
    let max = dp[0]
    for (let i = 1; i < nums.length; i++){
       dp[i] = Math.max((dp[i - 1] + nums[i]), nums[i])
        max = Math.max(dp[i], max)
    }
    return max
};

function maxSubArray(nums){
    let max = -Infinity
    let currSum = 0
    for (let i = 0; i < nums.length; i++){
        currSum = Math.max(nums[i], currSum + nums[i])
        if(currSum > max){
            max = currSum
        }
    }
    return max
}