// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

var invertTree = function(root) {
    if (!root) return root
    invertTree(root.right)
    invertTree(root.left)
    let temp = root.left
    root.left = root.right
    root.right = temp
    return root
}
