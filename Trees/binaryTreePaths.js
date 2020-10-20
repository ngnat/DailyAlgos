// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

function binaryTreePaths(root){
    if(!root) return null
    let results = []
    helper(root, [])
    return results
    function helper(node, curr){
        curr.push(node.val)
        if(!node.left && !node.right){
            curr = curr.join('->')
            results.push(curr)
        }
        if(!node.left){
            helper(node.left, curr.slice())
        }
        if(!node.right){
            helper(node.right, curr.slice())
        }
    }
}