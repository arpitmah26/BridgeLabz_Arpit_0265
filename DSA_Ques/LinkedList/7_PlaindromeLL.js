// 7. Palindrome Linked List
// Given a linked list, check if it is a palindrome.



function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function isPalindrome(head) {
    let slow = head, fast = head;
    let stack = [];

    while (fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    if (fast) slow = slow.next; 

    while (slow) {
        if (stack.pop() !== slow.val) return false;
        slow = slow.next;
    }

    return true;
}

let head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));


console.log("Is the linked list a palindrome?");
console.log(isPalindrome(head)); 
