// An array in JavaScript is a data structure that stores multiple values in a single variable. These values can be of any type (strings, numbers, objects, etc.) and are stored in a contiguous memory location, indexed starting from 0. Arrays are versatile and come with many built-in methods to manipulate and interact with their elements.

// Basic Syntax for Creating an Array

// Array of numbers
let numbers = [1, 2, 3, 4, 5];

// Array of strings
const fruits = ["apple", "banana", "cherry"];

// Mixed data types
const mixed = [1, "hello", true, { key: "value" }];
// Common Array Methods
// Here are some common array methods and their examples:

// 1. forEach()
// Executes a provided function once for each array element.


// const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6, 8
// 2. filter()
// Creates a new array with elements that pass a test defined in the callback function.


// const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
// 3. map()
// Creates a new array by applying a function to each element.


// const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9]
// 4. reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.



// const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
// 5. find()
// Returns the first element that satisfies the condition in the callback.


// const numbers = [4, 9, 16];
const greaterThan10 = numbers.find(num => num > 10);
console.log(greaterThan10); // Output: 16
// 6. findIndex()
// Returns the index of the first element that satisfies the condition.


// const numbers = [4, 9, 16];
const index = numbers.findIndex(num => num > 10);
console.log(index); // Output: 2
// 7. some()
// Checks if at least one element satisfies the condition.


// const numbers = [1, 2, 3];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true
// 8. every()
// Checks if all elements satisfy the condition.


// const numbers = [2, 4, 6];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true
// 9. concat()
// Joins two or more arrays.


const array1 = [1, 2];
const array2 = [3, 4];
const combined = array1.concat(array2);
console.log(combined); // Output: [1, 2, 3, 4]
// 10. includes()
// Checks if an array contains a specific value.


// const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // Output: true


// Looping Over Arrays
// Using forEach()

// const fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(fruit));

// traditional way of declaring foreach loop
// numbers.forEach(function(num) {
//     console.log(num * 2);
//   });
  

// Output: apple, banana, cherry
// Using for Loop

// const numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Output: 1, 2, 3
// Using for...of Loop

// const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}
// Output: 1, 2, 3
// Practical Example
// Here's a complete example using multiple methods:


const students = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 24 },
];

// 1. Filter students older than 21
const olderStudents = students.filter(student => student.age > 21);

// 2. Map to get their names
const names = olderStudents.map(student => student.name);

// 3. Log each name using forEach
names.forEach(name => console.log(name));

// Combined Output: Alice, Charlie