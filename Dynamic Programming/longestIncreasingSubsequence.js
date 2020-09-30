// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

var lengthOfLIS = function(nums, length = 0) {
    if (!nums.length) return 0
    let newArr = new Array(nums.length).fill(1)
    let maxLength = 1
    for (let j = 1; j < nums.length; j++){
        for (let i = 0; i < j; i++){
            if (nums[i] < nums[j]){
                newArr[j] = Math.max(newArr[j], (newArr[i] + 1))
                 maxLength = Math.max(maxLength, newArr[j])
            }
        }
        console.log(maxLength)
    }
    return maxLength
}