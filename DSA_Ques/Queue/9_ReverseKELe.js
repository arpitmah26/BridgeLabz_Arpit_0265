// 9) Reverse First K Elements of a Queue
// Given a queue and an integer k, reverse the first k elements of the queue

class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    front() {
      return this.queue[0];
    }
  
    size() {
      return this.queue.length;
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    reverseElements(k) {
      if (k <= 0 || k > this.size()) 
        return;
  
      let stack = [];
  
      for (let i = 0; i < k; i++) {
        stack.push(this.dequeue());
      }
  
      while (stack.length > 0) {
        this.enqueue(stack.pop());
      }
  
      for (let i = 0; i < this.size() - k; i++) {
        this.enqueue(this.dequeue());
      }
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  
  console.log("original Queue:", queue.queue);
  queue.reverseElements(3);
  console.log("queue after reverse:", queue.queue);