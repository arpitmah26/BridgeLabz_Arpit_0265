// Remove N-th Node from End of List
// Given a linked list and an integer n, remove the n-th node from the end of the list.


function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy, slow = dummy;

    // Move fast pointer n steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both fast and slow until fast reaches the end
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the N-th node
    slow.next = slow.next.next;
    return dummy.next;
}

function printLinkedList(head){
    let current = head;
    let output = '';
    while (current) {
        output += current.val + " -> ";
        current = current.next;
    }
    output +=  "null";
    console.log(output);           
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

head = removeNthFromEnd(head, 2);

console.log("Updated Linked List after removing 2nd node from end:");
printLinkedList(head);
