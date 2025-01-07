// In JavaScript, this is a special keyword that refers to the context in which a function is executed. Its value depends on how and where the function is called.

// key rules for this

// 1. Global context 
// in global scope : for browsers, this refers to gobal windpw object.
// for node.js, this refers to the global global obkect.

console.log(this); // In browsers: window, in Node.js: global

// 2. Inside an Object Method
// When a method is called on an object, this refers to the object that owns the method.

const person = {
    name: "Alice",
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
person.greet(); // "Hello, my name is Alice"
  
// 3. Alone in a function 
//  in non-strict mode this refers to global object
// in strict  mode: this is undefined.

function showThis() {
    console.log(this);
  }
  
  showThis(); // Non-strict: window (browser) or global (Node.js)
  
  "use strict";
function showThis() {
  console.log(this);
}

showThis(); // undefined


// 4. inside constructor function -> in it, this refers to the new object being created.

function Person(name) {
    this.name = name;
  }
  
const alice = new Person("Alice");
console.log(alice.name); // "Alice"


// 5. arrow function -->  arrow functions donot have their own this. instead, they inherit this from their surrounding lexical context.

// 6.In event handlers --> in DOM event handler, this ususally refers to the element that received the event.

// 7.Explicitly setting this with call, apply, and bind functions.
