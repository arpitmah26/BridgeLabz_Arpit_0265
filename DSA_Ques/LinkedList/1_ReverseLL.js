// 1) Reverse a Linked List
// Given a linked list, reverse it and return the head of the reversed list.


function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


function reverseLinkedList(head){
    let prev = null;
    let current  = head;
    while(current){
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current  = nextNode;
    }
    return prev;
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

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log("original Linked List");
printLinkedList(head);

let reversedHead  =reverseLinkedList(head);

printLinkedList(reversedHead);