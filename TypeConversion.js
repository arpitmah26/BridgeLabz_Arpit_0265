//type conversion

// 1. Explicit Type Conversion (Type Casting):
// To string
// let num = 123;
// let str = String(num); // "123"
// console.log(typeof str); // "string"


// To Number

// let str = "456";
// let num = Number(str); // 456
// console.log(typeof num); // "number"


// To Booelan
// let value = 0;
// let bool = Boolean(value); // false
// console.log(typeof bool); // "boolean"


// 2. Implicit Type Conversion (Type Coercion):

// String Coercion (when concatenating with strings):
// let num = 10;
// let str = " apples";
// console.log(num + str); // "10 apples"


// Number Coercion (during arithmetic operations):

// let str = "5";
// console.log(str * 2); // 10 (string "5" is converted to a number)


// Boolean Coercion (in conditional contexts):
// if ("hello") {
//   console.log("This is true!"); // Executes because "hello" is truth


// Examples of Coercion Pitfalls:

// String + Number:
// console.log("5" + 3); // "53" (string concatenation)

// String - Number:
// console.log("5" - 3); // 2 (number coercion)


// Equality Check (==):
// console.log(5 == "5"); // true (type coercion)
// console.log(5 === "5"); // false (no coercion, strict equality)


// What Does "use strict" Do?
// When "use strict" is enabled, it imposes the following restrictions:

// 1. Prevents the use of undeclared variables.

// "use strict";
// x = 10; // Error: x is not defined
// 2. Disallows deleting variables, functions, or arguments.

// "use strict";
// let x = 10;
// delete x; // Error: Cannot delete 'x'
// 3. Prevents duplicate parameter names in functions.

// "use strict";
// function example(a, a) {} // Error: Duplicate parameter name not allowed
// 4. Makes this default to undefined in functions not bound to an object.

// "use strict";
// function example() {
//   console.log(this); // undefined instead of the global object
// }
// 5. Throws an error for assigning to read-only properties or defining properties improperly.



// ## Implicit Coercion:
// Even in strict mode, type coercion occurs as usual.


// "use strict";
// console.log("5" - 2); // 3 (string "5" is coerced to a number)
// console.log("5" + 2); // "52" (number 2 is coerced to a string)


// ## Explicit Conversion:
// You can explicitly convert types the same way, regardless of strict mode.


// "use strict";
// let num = "123";
// console.log(Number(num)); // 123
// console.log(String(456)); // "456"

