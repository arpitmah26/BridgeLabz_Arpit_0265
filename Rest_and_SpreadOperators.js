// Rest parameters

//syntax
// function functionName(...restParameter) {
    // Use restParameter as an array
//   }

// examples of rest operator

/*

function greet(greeting, ...names) {
  console.log(`${greeting}, ${names.join(" and ")}!`);
}

greet("Hello", "Alice", "Bob", "Charlie");
// Output: Hello, Alice and Bob and Charlie!

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

*/



// ----------Spread Operator -----

// For arrays
const newArray = [...array];

// For objects
const newObject = { ...object };

const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3

const moreNumbers = [0, ...numbers, 4];
console.log(moreNumbers); // Output: [0, 1, 2, 3, 4]

const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, city: "New York" };

console.log(updatedPerson);
// Output: { name: 'Alice', age: 25, city: 'New York' }



// 2. Spread Operator to Pass Array Elements
function calculate(a, b, c) {
    return a + b + c;
  }
  
  const nums = [10, 20, 30];
  console.log(calculate(...nums)); // Output: 60
  

//3.merging arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

console.log(merged); // Output: [1, 2, 3, 4]

//Cloning and merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const clonedObj = { ...obj1 };
const mergedObj = { ...obj1, ...obj2 };

console.log(clonedObj); // Output: { a: 1, b: 2 }
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
 