//  native prototypes refer to the built-in prototypes that are part of the JavaScript language. Every object in JavaScript has an internal prototype, and many objects inherit properties and methods from these native prototypes.


//  prototypes has Object.getPrototypeOf(obj) or __proto__

// example 
const arr = [1,2,3];
console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);

const arr1 = [1,2,34];
const arr2 = [4,5,36];
console.log(arr1.push === arr2.push);


// built.in prototypes:

// 1.object.prototype

const obj = {name: "Arpit"};
console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("age"));


// Array.prototype

const arr3 = [1,2,4];
console.log(arr.map((x) =>  x *2));

// String.prototype
const str = "Hello, World!";
console.log(str.toUpperCase);
console.log(str.includes('e'));


// Function.prototype

function greet(){
    console.log("Hello!");

}
const boundGreet  = greet.bind(null);
boundGreet();

// Number.prototype

const num = 123.456;
console.log(num.toFixed(2)); 

// Boolean.prototype
const bool = true;
console.log(bool.toString()); 

// Date.prototype
const date = new Date();
console.log(date.toDateString()); // e.g., "Thu Jan 16 2025"

// RegExp.prototype
const regex = /world/i;
const str1 = "Hello, World!";
console.log(regex.test(str1)); // true
