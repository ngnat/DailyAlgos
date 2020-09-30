// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = 

var threeSum = function(nums) {
    
    nums.sort((a, b) => a - b)
    let results = []
    if (nums.length < 3) return []
    for (let i = 0; i < nums.length; i ++){
       let j = i + 1
       let k = nums.length - 1
       let sum = nums[i] + nums[j] + nums[k]
       
       while ( j < k){
           if (sum === 0) {
               results.push([nums[i], nums[j], nums[k]])
           }
           
           while (nums[j] === nums[j +1]) j++
           while (nums[k] === nums[k -1]) k--
           j++
           k--
           continue
          if (sum < 0) {
              j++
              continue
          } else {
              k--
              continue
          }
       }
        
    }
    return results
    
};