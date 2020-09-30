// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

var buildTree = function(preorder, inorder) {
    if(inorder.length){
        let last = preorder.shift();
        let index = inorder.indexOf(last);
        let root = new TreeNode(last);
        root.left = buildTree(preorder, inorder.slice(0, index));
        root.right = buildTree(preorder, inorder.slice(index+1));
        return root;
    }
    return null;
};