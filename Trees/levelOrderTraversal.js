// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

var levelOrder = function(root) {
    return helper([], root, 0);
  };
  
  var helper = function (res, root, level) {
    if (root) {
      if (!res[level]) res[level] = [];
      res[level].push(root.val);
      helper(res, root.left, level + 1);
      helper(res, root.right, level + 1);
    }
    return res;
  };