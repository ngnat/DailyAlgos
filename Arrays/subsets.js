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

function subSets(nums){
    let results = [[]]
    function helper(first, current){
        for (let i = first; i < nums.length; i++){
            current.push(nums[first])
            results.push(...current)
            helper(i + 1, current)
            current.pop()
        }
    }
    helper(0, [])
    return results
}