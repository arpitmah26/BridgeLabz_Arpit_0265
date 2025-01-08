// Prototypes
// In JavaScript, prototypes are a mechanism by which objects inherit properties and methods from other objects. Every JavaScript object has a built-in property called [[Prototype]] that points to another object, which serves as a template or prototype

// __proto__ or obj.prototype

//1. example of __proto__

const parentObj = {
    greet: function() {
        console.log("Hello from the parent!");
    }
};

const childObj = {
    name: "Child"
};

// Setting the prototype of childObj to parentObj
childObj.__proto__ = parentObj;

childObj.greet(); 


// arr.__proto__ == Array.prototype
// arr.__proto__.__proto__ == Object.prototype
// arr.__proto__.__proto__ .__proto__ = null
//  object.__proto__ == Object.prototype
//  object.__proto__.__proto__ = null
// fun.__proto__ == Function.prototype
//  fun.__proto__.__proto__ = Object.prototype


// Examples of prototype

// 2. using constructor function
function Person(name) {
    this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const arpit = new Person('Arpit');
arpit.greet(); // Output: Hello, my name is Arpit


// Different types of prototypes in js 
// 1. Object Prototype (Object.prototype)
// 2. Constructor Function Prototype
// 3. Instance Prototype ([[Prototype]] / __proto__)
// 4. Prototype of Built-in Objects
// 5. Null Prototype (Object.create(null))
// 6. Custom Prototypes (Manually Created Prototypes) that can be created using  Object.create()

// Different Ways to create prototypes in js
//1. Using Constructor Functions
// 2. Using Object.create()
// 3. Using Class Syntax (ES6)
// 4. Manually Setting the __proto__ Property
// 5. Using Object.setPrototypeOf()
// 6. Using Object Literals with Prototypes
// 7. Extending Built-In Prototypes
