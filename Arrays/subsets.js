// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

var subsets = function(nums) {
    let results = [[]]
    
    function backtrack(first, current){
        for(let i = first; i < nums.length; i++){
            current.push(nums[i])
            results.push([...current])
            backtrack(i + 1, current)
            current.pop()
        }
    }
    
    backtrack(0, [])
    return results
}