// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

function isPalindrome(head){
    if (head && !head.next) return true
    let start = head
    let mid = head
    while(mid && mid.next){
        mid = mid.next
        start = start.next
    }

    start = reverse(start)
    mid = head

    while (mid && start){
        if (start.val !== mid.val){
            return false
        }
        mid = mid.val
        start = start.val
    }

    return true


}

function reverse(head){
    let next = null
    let prev = null
    let curr = head
    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}