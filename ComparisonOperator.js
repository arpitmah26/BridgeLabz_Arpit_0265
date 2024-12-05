// Types of Comparison Operators
// 1. Equality Operators
// Loose Equality (==):

// Compares two values for equality after performing type coercion (if necessary).
// Example:

// console.log(5 == "5"); // true (string "5" is coerced to a number)
// console.log(true == 1); // true (true is coerced to 1)
// console.log(null == undefined); // true


// Strict Equality (===):
// Compares two values for equality without type coercion. The values must be of the same type to be considered equal.
// Example:

// console.log(5 === "5"); // false (different types)
// console.log(true === 1); // false (different types)
// console.log(null === undefined); // false


// Loose Inequality (!=):
// Compares two values for inequality after performing type coercion.
// Example:

// console.log(5 != "5"); // false (coerced to the same value)
// console.log(true != 1); // false


//  Strict Inequality (!==):
// Compares two values for inequality without type coercion.
// Example:

// console.log(5 !== "5"); // true
// console.log(true !== 1); // true


// 2. Relational Operators
// Greater Than (>):

// Returns true if the left operand is greater than the right operand.
// Example:

// console.log(10 > 5); // true
// console.log("b" > "a"); // true (compares based on Unicode values)

// Less Than (<):
// Returns true if the left operand is less than the right operand.
// Example:

// console.log(5 < 10); // true
// console.log("a" < "b"); // true
// Greater Than or Equal To (>=):

// Returns true if the left operand is greater than or equal to the right operand.
// Example:

// console.log(10 >= 10); // true
// console.log(5 >= 6); // false

// Less Than or Equal To (<=):
// Returns true if the left operand is less than or equal to the right operand.
// Example:

// console.log(10 <= 10); // true
// console.log(5 <= 4); // false

// 3. Other Comparison Operators
// Object.is():

// Compares two values for strict equality, but with a few differences from ===:
// Treats NaN as equal to itself.
// Distinguishes between +0 and -0.
// Example:

// console.log(Object.is(NaN, NaN)); // true
// console.log(Object.is(+0, -0)); // false


// instanceof:
// Checks if an object is an instance of a particular class or constructor function.
// Example:

// console.log([] instanceof Array); // true
// console.log({} instanceof Object); // true

// typeof Operator:
// Returns the type of a value as a string.
// Example:

// console.log(typeof 42 === "number"); // true
// console.log(typeof "hello" === "string"); // true
