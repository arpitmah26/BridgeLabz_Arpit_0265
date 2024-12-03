// An arrow function in JavaScript is a concise syntax for writing functions, introduced in ES6 (ECMAScript 2015). 
// It is often used for short functions and callback functions due to its brevity and the fact that it does not bind its own this context.

//syntax 

// const functionName = (para1, para2) => XPathExpression;


// 1. signle--line arrow function
// const square = (x) => x*x;
// console.log(square(4));


//2. multi-line arrow function
// const  add =(a,b) => {
//     const sum = a+b;
//     return sum;
// };
// console.log((add(3,5)));


//3. arrow func with no parameters
// const greet  = () => "Hello World!";
// console.log(greet());

//4. arrow func with one parameter
// const double = x => x*2;
// console.log(double(5));


//5. returning an object
//wrap the object in () parentheses
// const createUser = (name, age) => ({name, age});
// console.log(createUser("Arpit", 21));

/*
Key Features of Arrow Functions
Short Syntax

Less verbose compared to traditional function declarations.
No this Binding

Arrow functions do not have their own this. They inherit this from the enclosing scope.
This makes them useful in callbacks where this needs to refer to the outer context.
*/

//Example of Arrow function

// function Timer() {
//     this.seconds =0;
//     setInterval(() => {
//         this.seconds++;
//         console.log(this.seconds);  
//     }, 1000);
// }
// const timer =new Timer();

