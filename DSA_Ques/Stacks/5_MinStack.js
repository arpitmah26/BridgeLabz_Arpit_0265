// 5) Min Stack
// Implement a stack that supports push, pop, top, and retrieving the minimum element in constant time.


class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(x) {
      this.stack.push(x);
      if (this.minStack.length === 0 || x <= this.getMin()) {
        this.minStack.push(x);
      }
    }
  
    pop() {
      if (this.stack.length === 0) {
        throw new Error("Stack is empty");
      }
      const popped = this.stack.pop();
      if (popped === this.getMin()) {
        this.minStack.pop();
      }
    }
  
    top() {
      if (this.stack.length === 0) {
        throw new Error("Stack is empty");
      }
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        throw new Error("Stack is empty");
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  const stack = new MinStack();
  stack.push(5);
  stack.push(3);
  stack.push(7);
  console.log(stack.getMin()); 
  stack.pop();
  console.log(stack.getMin());
  stack.pop();
  console.log(stack.getMin()); 
  