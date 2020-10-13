// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

function mergeKLists(lists){
    let merged = null
    for (let list of lists){
        merged = merge(merged, list)
    }
    return merged
}

function merge(l1, l2){
    if(!l1) return l2
    if(!l2) return l1
    if(l1.val < l2.val){
        l1.next = merge(l1.next, l2)
        return l1
    }
    l2.next merge(l1, l2.next)
    return l2
}