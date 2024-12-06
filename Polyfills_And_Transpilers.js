// Polyfills and Transpilers in JavaScript
// Modern JavaScript introduces new features regularly (e.g., ES6 and beyond), but not all browsers or environments support these features right away. Polyfills and transpilers are tools and techniques that help ensure compatibility across older environments.

// 1. Polyfills
// What is a Polyfill?

// A polyfill is a piece of code (usually JavaScript) that provides the functionality of a modern feature in older environments that don't natively support it.

// Think of it as a "shim" that "fills in" the missing features.
// A polyfill implements modern functionality by adding equivalent code.
// When to Use a Polyfill?
// When you want your code to work on older browsers or environments.
// When the feature is not yet natively available in the target platform.
// Example: Adding Array.prototype.includes
// The Array.prototype.includes method was introduced in ES2016. It checks if an array contains a certain element. Older browsers like Internet Explorer don't support it.

// Native Code (Modern Browsers):


const arr = [1, 2, 3];
console.log(arr.includes(2)); // Output: true


// Polyfill for Older Browsers: If the browser doesn't support includes, we can define it ourselves:


if (!Array.prototype.includes) {
  Array.prototype.includes = function (element) {
    return this.indexOf(element) !== -1;
  };
}

// Usage
// const arr = [1, 2, 3];
// console.log(arr.includes(2)); // Output: true


// Common Polyfills//
// Promise: For environments that don't support Promises.
// fetch: For older browsers that lack the fetch API.
// Object.assign, Array.from, etc.




// 2. Transpilers
// What is a Transpiler?

// A transpiler (short for translator + compiler) is a tool that converts modern JavaScript (ES6+ or newer syntax) into an older version of JavaScript (like ES5) so that it runs in all environments, including older browsers.

// Transpilers translate syntax, not runtime features.
// Popular Transpilers
// Babel: The most widely used JavaScript transpiler.
// TypeScript Compiler: Converts TypeScript into JavaScript and can also handle modern-to-older JavaScript conversions.
// Example: Using Babel

// Modern Syntax (Arrow Functions):


// const greet = () => {
//   console.log("Hello!");
// };

// Older Browsers (after Transpilation):

// var greet = function () {
//   console.log("Hello!");
// };


// How to Use Babel for Transpiling?
// Install Babel:

// bash
// Copy code
// npm install --save-dev @babel/core @babel/cli @babel/preset-env
// Configure Babel: Create a .babelrc file:

// json
// Copy code
// {
//   "presets": ["@babel/preset-env"]
// }
// Transpile Code: Run Babel from the command line:

// bash
// Copy code
// npx babel src --out-dir dist
// src: Directory containing modern JavaScript.
// dist: Directory where the transpiled code is saved.


// Example: Combining Both

// Import polyfills
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import "whatwg-fetch"; // Polyfill for fetch

// // Modern Code
// const fetchData = async () => {
//   const response = await fetch("https://api.example.com/data");
//   const data = await response.json();
//   console.log(data);
// };

// fetchData();
