// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase, before the code is executed

// 1. variable hoisting:

// a. variable hoisting with var:
console.log(x); // undefined
var x = 5;
console.log(x); // 5


// b. variable hoisting with let and const:
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
// The declaration is hoisted, but accessing it before initialization results in an error due to the temporal dead zone.

// 2. function hoisting
foo(); // "Hello!"
function foo() {
  console.log("Hello!");
}

//  function expression hoisting
console.log(bar); // undefined
var bar = function() {
  console.log("Hi!");
};
bar(); // "Hi!"

