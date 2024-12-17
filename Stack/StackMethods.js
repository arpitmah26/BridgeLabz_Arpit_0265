// we  can implement stack in 2 ways in javascript: 
// 1. using arrays
// 2. using classes


// using arrays
// let stack =[];

// push operation

// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack);

// //pop operation
// let top = stack.pop();
// console.log(top);
// console.log(stack);

// //peek 
// console.log(stack[stack.length -1]);


//Stack using a class:

class Stack {
    constructor(){
        this.items = [];
    }

    // push
    push(element){
        this.items.push(element);
    }


    //pop
    pop(){
        if(this.isEmpty()) return "Stack is Empty";
        return this.items.pop();
    }

    //peek
    peek(){
        return this.items[this.items.length -1];
    }

    //check is empty
    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
}

let stack  = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());



