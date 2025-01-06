// 3. Merge Two Sorted Linked Lists
// Given two sorted linked lists, merge them into a single sorted list.


function ListNode(val, next = null){
    this.val = val;
    this.next = next;
}

function mergeTwoLists(n1, n2){
    let dummy = new ListNode(1);
    let current = dummy;
    while(l1 && l2){
        if(l1.val < l2.val){
            current.next  =l1;
            l1 = l1.next;
        }else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next; 
    }
    current.next = l1 || l1;
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


let l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

let mergedHead = mergeTwoLists(l1, l2);


console.log("Merged Linked List:");
printLinkedList(mergedHead);