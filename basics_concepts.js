const prompt = require('prompt-sync')({sigint: true});
// 1. Variables
// Variables store data that can be used and manipulated in a program.
// Declared using let, const, or var (older and less preferred).
// Examples:

let name = "Alice";   // A variable that can change
const pi = 3.14159;   // A constant variable (cannot change)
var age = 30;         // An older way to declare variables

// 2. Data Types
// JavaScript has several built-in data types:

// Primitive types: String, Number, Boolean, Undefined, Null, Symbol, BigInt
// Objects: Used to store collections of data or more complex entities

let str = "Hello, World!"; // String
let num = 42;             // Number
let isHappy = true;       // Boolean
let value = null;         // Null
let unknown;              // Undefined
let bigNumber = 12345678901234567890n; // BigInt


// 3. Operators
// Arithmetic Operators: +, -, *, /, %, **
// Comparison Operators: ==, ===, !=, !==, <, >, <=, >=
// Logical Operators: &&, ||, !
// Assignment Operators: =, +=, -=, etc.

let x = 10 + 5;    // Addition
let isEqual = x === 15; // Strict equality
let result = x > 10 && x < 20; // Logical AND


// 4. Control Structures
// Conditional Statements: Execute code based on conditions.

if (x > 10) {
    console.log("x is greater than 10");
  } else {
    console.log("x is 10 or less");
  }

  
// Switch Case: A more readable way to handle multiple conditions

//   switch (color) {
//     case "red":
//       console.log("Color is red");
//       break;
//     default:
//       console.log("Unknown color");
//   }

//   5. Loops
// Repeat code blocks until a condition is met.
// Types: for, while, do...while, for...in, for...of

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// 6. Functions
//  reusable block of code.

 function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));


// Arrow Function

const add = (a, b) => a + b;


// 7. Arrays and Objects
// Arrays: Collections of items.

let numbers = [1, 2, 3, 4, 5];

// Objects: Collections of key-value pairs.
let person = { name: "Alice", age: 25 }



// 8. Events and DOM Manipulation
// JavaScript can interact with HTML elements.

document.getElementById("button").addEventListener("click", function() {
    alert("Button clicked!");
});

// 9. Error Handling
// Use try, catch, and finally to handle errors gracefully.

try {
    let result = riskyOperation();
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Operation completed.");
}