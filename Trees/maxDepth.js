// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

// var maxDepth = function(root) {
//     if (!root) return 0
//     let left = maxDepth(root.left)
//     let right = maxDepth(root.right)
//     return Math.max(left, right) + 1
// };

var maxDepth = function(root) {
    let maxDepth = 0
    helper(root, 1)
    return maxDepth
    function helper(node, depth){
        if(!node) return null
        if(depth > maxDepth){
            maxDepth = depth
           }
        if (node.left){
            helper(node.left, depth + 1)
        }
        
        if(node.right){
            helper(node.right, depth + 1)
        }
    }
};
