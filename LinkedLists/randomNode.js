// Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

// Follow up:
// What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?

// Example:

// // Init a singly linked list [1,2,3].
// ListNode head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// Solution solution = new Solution(head);

// // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
// solution.getRandom();

var Solution = function(head) {
    this.head = head
    let curr = this.head
    this.length = 0
    while(curr){
        this.length++
        curr = curr.next
    }  
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    
    let position = Math.floor(Math.random() * Math.floor(this.length))
    let curr = this.head
    while(position > 0){
        curr = curr.next
        position--
    }
    return curr.val
};
