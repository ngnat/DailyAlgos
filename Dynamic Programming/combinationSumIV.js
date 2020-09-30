// Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

// Example:

// nums = [1, 2, 3]
// target = 4

// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)

// Note that different sequences are counted as different combinations.

// Therefore the output is 7.

var combinationSum4 = function(nums, target) {
    
    let dp = new Array(target + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= target; i++){
        for (let j = 0; j< nums.length; j++){
            let val = nums[j]
            if (i - val >= 0){
                dp[i] += dp[i - val]
            }
        }
    }
    return dp[target]    
};