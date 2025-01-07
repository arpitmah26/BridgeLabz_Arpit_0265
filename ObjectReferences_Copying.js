// Object References: It is when you an object to  variable, the var doesnt store the objects itself. Instead, it sotres a reference to the memory location where the object is stored.


// Example

// let obj1 = {name: "Arpit"};
// let obj2 = obj1;

// obj2.name  = "Ali";

// console.log(obj1.name);

// here when we assing obj1 to obj2 both vars reference to same object, on changing value of obj2 , it affects obj1.


//  OBJECT COPYING 
// There are 2 ways to copy objects in js: shallow copy and deep copy.


// a. Shallow copy
// A shallow copy creates a new object, but only copies the top-level properties. If the object contains nested objects or arrays, the references to those nested objects are copied, not the actual nested objects themselves

// 1. using Object.assign();

let obj3 = {name: "ARpit"};
let obj4 = Object.assign({}, obj3);

obj4.name = "Babbi";

console.log(obj3.name);  //value not changed because it creates a copy of obj3


//2. Using Spread Operator(...)

// let obj1 = {name: "Arpit", age: 21};
// let obj2 = {...obj1};

// obj2.age =22;

// console.log(obj1.name);
// console.log(obj1.age);  //value not changed because it creates a copy of obj1


// If There is nested objects, in object changes made in the nested object will affect the original

// let obj1 = { person: { name: "Alice" } };
// let obj2 = { ...obj1 };

// obj2.person.name = "Bob";

// console.log(obj1.person.name); // "Bob" (both affected)


// b.  deep copy

//  A deep copy duplicates not just the top-level properties but also all nested objects and arrays, creating a completely independent object.

// 1. using JSON.parse and JSON.stringify:

let obj1 = {person: {name: "Arpit"}, age:25};
let obj2 =JSON.parse(JSON.stringify(obj1));

obj2.person.name = "Babbi";

console.log(obj1.person.name);

// Limitation: This method doesn't work for objects with fucnction, undefined. or Symbol values.
