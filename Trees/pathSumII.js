// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

function pathSumII(root, sum){
    if(!root) return []
    let results = []
    helper(root, [], 0)
    return results
    function helper(node, curr, currSum){
        curr.push(node.val)
        currSum += node.val
        if(!node.left && !node.right && currSum === sum){
            results.push([...curr])
        }
        if(node.left){
            helper(node.left, curr, currSum)
        }
        if(node.right){
            helper(node.right, curr, currSum)
        }
        curr.pop()
    }

}