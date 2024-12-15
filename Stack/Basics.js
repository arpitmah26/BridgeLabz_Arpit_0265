// Basics

// example of a stack class using an array in js.

// class Stack{
//     constructor(){

//         this.items= [];
//     }
// }
 


// methods in stack

// push(element) 
// {
//     this.items.push(element);
// }


//pop()

// pop()
// {
//     if(this.items.length == 0)
//     return 'Underflow'
//     return this.items.pop();
// }



//peek()

// peek()
// {
//     return this.items[this.items.length -1];
// }


//helper methods

//isEmpty():

// isEmpty()
// {
//     return this.items.length == 0;
// }


//printStack()

// printStack()
// {
//     let str = "";
//     for(let i=0; i < this.items.length; i++){
//         str += this.items[i] + " ";
//         return str;
//     }
// }

// creating object for stack class

// let stack = new Staack();

let stack = new Stack();
console.log(stack.isEmpty()); // returns false
console.log(stack.pop());   // returns underflow

stack.push(10);
stack.push(20);
stack.push(30);

