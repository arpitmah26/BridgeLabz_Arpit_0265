// Methods are functions that belong to an object.

// 1. in-built  object methods

// a. Object.keys(obj) --> returns an array of the  object's own property keys.

const obj = {a:1, b: 2};
console.log(Object.keys(obj));


// b. Object.values(obj) -->  Returns an array of the object's own property values:

console.log(Object.values(obj)); // [1, 2]


// c. Object.entries(obj) --> Returns an array of key-value pairs:

console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]


// d. Object.assign(target, ...sources) --> Copies properties from source objects to the target object:

const target = {a:1};
const source = {b:2};
Object.assign(target, source);
console.log(target);

// Object.create(proto, [propertiesObject]) :  Creates a new object with the specified prototype:


const proto = { greet: function() { console.log("Hello"); } };
const obj1 = Object.create(proto);
obj1.greet(); // "Hello"


// Object.freeze(obj): Prevents adding, deleting, or changing properties:


const obj2 = { a: 1 };
Object.freeze(obj2);
obj2.a = 2; // No effect


// Object.seal(obj): Prevents adding or deleting properties but allows modifying existing ones:

const obj3 = { a: 1 };
Object.seal(obj3);
obj3.a = 2; // Works

// Object.is(value1, value2): Determines whether two values are the same:

console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN));


// 2. custom methods

// you can define methods in objects.


const person = {
    name: "Alice",
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
person.greet(); 
  

// using this

const obj4 = {
    a: 10,
    showThis() {
      console.log(this);
    }
  };
  
obj4.showThis(); 

// using hasOwnProperty() -> The hasOwnProperty method checks if an object contains a specific property as its own property (not inherited from its prototype).


const obj5 = {
    name: "Arpiy",
    age: 25
};
  
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("gender")); // false
  