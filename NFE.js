// NFE (Named Function Expression) in JavaScript refers to a function expression that has a name. The name can be used within the function itself for recursive calls or debugging, but it is not accessible outside the function's scope.

// Syntax
// A Named Function Expression looks like this:


// const myFunction = function funcName() {
//     console.log("This is a Named Function Expression");
// };
// Here:

// funcName is the name of the function.
// myFunction is the variable to which the function is assigned.



const example = function myNFE() {
    console.log(typeof myNFE); // "function"
};
example();
console.log(typeof myNFE); // "undefined"


const countDown = function startCount(n) {
    if (n > 0) {
        console.log(n);
        startCount(n - 1); // Recursive call
    }
};
countDown(5);


const test = function myTest() {
    throw new Error("Testing error");
};
test();
// Stack trace will show "myTest"


// When to Use Which
// Use IIFE:
// When you need to execute code immediately.
// To create a private scope for variables.
// For initialization or setup logic.
// Use NFE:
// When recursion is required without relying on external variables.
// To improve debugging with named stack traces.
// For self-referencing functions in complex logic.
