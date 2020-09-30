
// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

var maxProduct = function(nums) {
  
    let currMin = nums[0]
    let currMax = nums[0]
    let max = nums[0]
    
    for (let i = 1; i < nums.length; i++){
        let num = nums[i]
        let minProd = currMin * num
        let maxProd = currMax * num
        currMax = Math.max(num, minProd, maxProd)
        currMin = Math.min(num, minProd, maxProd)
        max = Math.max(currMax, max)
    }
      return max
      
  }