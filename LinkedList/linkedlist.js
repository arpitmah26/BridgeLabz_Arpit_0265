//  Linked List

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
        constructor(){
            this.head = null;
            this.size =0;
        }

        //add a new node to the end of the list
        append(data){
            const newNode  = new Node(data);
            if(!this.head) {
                this.head  =newNode;
            }else{
                let current = this.head;
                while(current.next){
                    current = current.next;
                }
                current.next = newNode;
            }
            this.size++;
        }

        //prepend
        prepend(data){
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
        }

        //remove node by its value
        remove(data){
            if(!this.head) return;

            if(this.head.data === data){
                this.head = this.head.next;
                this.size--;
                return;
            }

            let current = this.head;
            let previous = null;

            while(current && current.data !== data){
                previous = current;
                current = current.next;
            }

            if(current){
                previous.next = current.next;
                this.size--;
            }
        }

        //print list elements
        printList(){
            let current = this.head;
            let result = [];
            while(current){
                result.push(current.data);
                current  = current.next
            }
            console.log(result.join(" -> "));
            
        }
        //insert node at specific position
insertAt(data, index){
    if(index < 0 || index > this.size){
        console.log("Index out of bounds");
        return;
        
    }
    const newNode = new Node(data);

    if(index === 0){
        newNode.next = this.head;
        this.head = newNode;
    }else{
        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while(currentIndex < index){
            previous = current;
            current = current.next;
            currentIndex++;
        }

        previous.next = newNode;
        newNode.next = current;
    }

    this.size++;
}



}

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log("after appending:");
linkedList.printList();


//prepend elements
linkedList.prepend(5);
console.log("after prepending");
linkedList.printList();

//remove
linkedList.remove(20);
console.log("after removing 20:");
linkedList.printList();

//remove the head
linkedList.remove(5);
console.log("After removing the head(5)");
linkedList.printList();

//insert node at specific position


linkedList.insertAt(15,1);
linkedList.printList();