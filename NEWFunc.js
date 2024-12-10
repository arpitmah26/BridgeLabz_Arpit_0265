// new function syntax
/*
The new Function syntax in JavaScript allows you to create a new 
function dynamically, where the function body and 
parameters are specified as strings. This is similar
to how the eval function works but is specifically for creating functions.

syntax
let func = new Function([arg1, arg2, ..., argN], functionBody);
arg1, arg2, ..., argN: Strings that represent the names of the parameters of the function.
functionBody: A string that represents the JavaScript code defining the function body.
*/
//Examnple


let sum = new Function('a', 'b','return a+b');
console.log(sum(3,4));

// const sum = new Function('a', 'b', 'return a + b');

// sum(1 + 2); // 3


// let str = ... receive the code from a server dynamically ...

// let func = new Function(str);
// func();

function getFunc() {
    let value = "test";
  
    let func = new Function('alert(value)');
  
    return func;
  }
  
  getFunc()(); // error: value is not defined


//compare it with theh regular behaviour

function getFunc(){
    let value = "test";
    let func = function() {alert(value); };

    return func;    
}
getFunc()();


// Before the new function syntax was introduced  we used
// Function expression

let sum = function(a, b) {
    return a + b;
};

// Function declaration

function sum(a, b) {
    return a + b;
}

// Arrow Function
let sum = (a, b) => a + b;
