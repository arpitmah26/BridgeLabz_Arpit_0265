// 4) Find the Middle Element of a Linked List
// Given a linked list, find the middle element.


function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function findMiddle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

let middleNode = findMiddle(head);
console.log("Middle element of the linked list:", middleNode.val);
