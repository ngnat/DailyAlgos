// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

function topKFrequent(nums, k){
    let dict = {}
    let results = []
    for (let num of nums){
        dict[num] = dict[num] + 1 || 1
    }
    let sorted = Object.entries(dict).sort((a,b) => {
        return b[1] - a[1]
    })
    for (let i = 0; i < k; i++){
        results.push(Number(sorted[i][0]))
    }
    return results

}