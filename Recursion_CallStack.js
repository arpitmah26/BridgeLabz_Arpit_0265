// Examples

// function factorial(n){

//     //base case
//     if(n === 0 || n === 1){
//         return 1;
//     }

//     //recursive call
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

/*
Understanding the Call Stack
The call stack is a data structure used by JavaScript to keep track of function calls. It works on the LIFO (Last In, First Out) principle:

The last function call added to the stack is the first to be executed.
When a function completes, it's removed from the stack.
*/

// Call stack using factorial(3);
// Call Stack:
// 1. factorial(3) -> factorial(2) -> factorial(1)
// 2. factorial(1) returns 1, removed from stack.
// 3. factorial(2) calculates 2 * 1, removed from stack.
// 4. factorial(3) calculates 3 * 2, removed from stack.

//fibonacci using recusrion

// function fibonacci(n){

//     //base case
//     if(n=== 0) return 0;
//     if(n === 1) return 1;

//     return fibonacci(n-1) + fibonacci(n-2);
// }
// console.log(fibonacci(6));


// 3.Sum of array elements

// function sumArray(arr, index =0) {
//     if(index === arr.length){
//         return 0;
//     }

//     return arr[index] + sumArray(arr, index +1);
// }
// const numbers = [1,2,3,4,5];
// console.log(sumArray(numbers));


//4. Traversing a nested object

// const nestedObject = {
//     a:1,
//     b: {c:2, d: {e:3}},
// };

// function traverse(obj){
//     for(const key in obj){
//         if(typeof obj[key] == "object"){
//             traverse(obj[key]);  // recursive case
//         } else{
//             console.log(`${key}: ${obj[key]}`); //base case
            
//         }
//     }
// }
// traverse(nestedObject)


// stack examples

//1. using array as a stack

class Stack{
    constructor() {
        this.items =[];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty){
            return "Stack is Empty";
        }
        return this.items.pop();
    }

    //view the top element
    peek(){
        if(this.isEmpty){
            return "Stack is empty";
        }
        return this.items[this.items.length -1];

    }

    //check if the stack is empty?
    isEmpty(){
        return this.items.length === 0;
    }  

    //return the size of the stack
    size(){
        return this.items.length;
    }
}


// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// console.log(stack.peek());
// // console.log(stack.pop());
// console.log(stack.isEmpty());


//2. Stack using closures

function createStack(){
    let stack = [];

    return{
        push(element){
            stack.push(element);
        },

        pop(){
            if(stack.length === 0) return "Stack is empty";
            return stack.pop();
        },

        peek(){
            return stack[stack.length -1] || "Stack is empty";
            return stack.pop()
        },
        isEmpty(){
            return stack.length === 0;
        },
        size(){
            return stack.length;
        }
    };
}

const stack = createStack();
stack.push(5);
stack.push(15);
console.log(stack.peek());
// console.log(stack.pop());

console.log(stack.size());
