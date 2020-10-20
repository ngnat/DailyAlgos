// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// You may return the answer in any order.

 

// Example 1:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]

var combine = function(n, k) {
    if(k>n) return []
    
    let results = []
    backtrack(1,[])
    return results
    function backtrack(start, current){
        if (current.length === k){
            results.push([...current])
        }
        for (let i = start; i <= n; i++){
            current.push(i)
            backtrack(i + 1, current)
            current.pop()
        }
    }
    
};