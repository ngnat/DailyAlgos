// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

var zigZagOrder(root){
    if(!root){
        return []
    }
     let queue = [root]
     let result = []
     let deep = 0
     while (queue.length > 0){
         const size = queue.length
         let level = []
         for (let i = 0; i < size; i++){
             let node = queue.shift()
             if(deep % 2 === 0) {level.push(node.val) }
             else {level.unshift(node.val)}
             
             if(node.left) queue.push(node.left)
             if(node.right) queue.push(node.right)
         }
         result.push(level)
         deep++
     }
     return result
}
