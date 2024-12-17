// Queue is a linear data structure that follows the FIFo principle.
//  in includes  enqueue and dequeue
//  2 methods to implement the queue:
// 1.. using array, 2. using linked list

// using array

class Queue{
    constructor() {
        this.items =[];

    }

    //add an item to end of queue
    enqueue(element){
        this.items.push(element);
    }

    //remove the item at front of queue
    dequeue(){
        if(this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    //return the front item without removing it
    front(){
        if(this.isEmpty()) {
            return "no elements in queue";
        }
        return this.items[0];
    }

    //check if queue is empty
    isEmpty(){
        return this.items.length === 0;
    }

    //return size 
    size(){
        return this.items.length;
    }


    //print all elements in queue
    printQueue(){
        console.log(this.items.join(" "));
    }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.printQueue();

console.log(queue.dequeue());
console.log(queue.front());
queue.printQueue();

