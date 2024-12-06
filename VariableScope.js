/*
Variable scope determines where variables can be accessed or modified in your code. JavaScript has three main types of variable scope:

Global Scope
Function Scope
Block Scope
Additionally, JavaScript also has concepts like lexical scope and module scope.

*/

// 1. Global Scope
// A variable declared outside of all functions or blocks is in the global scope.
// It can be accessed from anywhere in the code.

let globalVar = "I am global";

function printGlobal() {
  console.log(globalVar); // Accessible
}

printGlobal(); // Output: I am global
console.log(globalVar); // Output: I am global


// 2. . Function Scope
// Variables declared inside a function (using var, let, or const) are local to the function and cannot be accessed outside it.
// Function scope is limited to the body of the function.

function greet() {
    let message = "Hello!";
    console.log(message); // Accessible
  }
  
  greet(); // Output: Hello!
  console.log(message); // Error: message is not defined
  

//   3. Block Scope
//   Introduced with let and const in ES6.
//   A variable declared inside a block ({}) is only accessible within that block.
//   Block scope applies to loops, conditionals, and functions


  {
    let blockScoped = "I am block scoped";
    console.log(blockScoped); // Accessible
  }
  
  console.log(blockScoped); // Error: blockScoped is not defined
  

//   Using var (Pre-ES6)
// var does not have block scope; it is function-scoped.

if (true) {
    var x = 10;
  }
  console.log(x); // Output: 10 (x is accessible outside the block)


//   4. Lexical Scope
//   Lexical scope means that a variable's scope is determined by where it is declared in the source code.
//   Inner functions have access to variables in their outer functions due to lexical scoping.


  function outer() {
  let outerVar = "Outer Variable";

  function inner() {
    console.log(outerVar); // Accessible
  }

  inner();
}

outer(); // Output: Outer Variable

// 5. Module Scope
// In JavaScript modules (.js files), variables declared with let, const, or var are scoped to the module and not accessible globally.
// Use the export and import keywords to share variables between modules.A

export const message = "Hello from module1!";

import { message } from './module1.js';
console.log(message); // Output: Hello from module1!

// Hoisting and Scope
// Hoisting moves variable and function declarations to the top of their scope during the compilation phase.
// Only declarations are hoisted, not initializations.


console.log(a); // Output: undefined (declaration is hoisted)
var a = 10;

console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;
