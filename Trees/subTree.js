// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
 

// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

var isSubtree = function(s, t) {
    if (!s) {
        return false
    } else if (isSameTree(s,t)) {
        return true
    } else {
        return isSubtree(s.left, t) || isSubtree(s.right, t)
    }
}

function isSameTree(s, t){
    if (!s || !t){
        return s === null && t === null
    } else if (s.val === t.val){
        return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
    } else {
        return false
    }
}