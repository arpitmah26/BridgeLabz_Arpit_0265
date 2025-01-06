// 2) Circular Queue
// Implement a circular queue where the enqueue and dequeue operations are performed in constant time.


class CircularQueue {
    constructor(size) {
      this.queue = new Array(size);
      this.front = 0; 
      this.rear = 0; 
      this.size = size;
      this.count = 0;  
    }
  
    enqueue(value) {
      if (this.isFull()) {
        console.log("Queue is full!");
        return;
      }
  
      this.queue[this.rear] = value;
      this.rear = (this.rear + 1) % this.size; // Wrap around if we reach the end
      this.count++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty!");
        return null;
      }
  
      const value = this.queue[this.front];
      this.front = (this.front + 1) % this.size; // Wrap around if we reach the end
      this.count--;
      return value;
    }
  
    frontElement() {
      if (this.isEmpty()) {
        console.log("Queue is empty!");
        return null;
      }
      return this.queue[this.front];
    }
  
    isEmpty() {
      return this.count === 0;
    }
  
    isFull() {
      return this.count === this.size;
    }
  
    currentSize() {
      return this.count;
    }
  }
  

  const queue = new CircularQueue(3);
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.dequeue()); 
  queue.enqueue(40);
  console.log(queue.frontElement());
  console.log(queue.isFull()); 
  console.log(queue.dequeue());  
  console.log(queue.dequeue());  
  