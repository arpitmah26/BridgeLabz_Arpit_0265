// Error handling with promises refers to managing and responding to errors that occur during the execution of asynchronous operations, ensuring your program can recover or provide meaningful feedback.

// Error occurs in promises

// 1. explicitly rejection: A promise is explicitly rejected using reject() in the executor function
// example

// const promise = new Promise((resolve, reject) => {
//     reject("an error occured!");
// });

// 2. Thrown errors: 
// Example

// const promise1 = new Promise((resolve, reject) => {
//     throw new Error("Something went wrong!");
// });


// Methods for handling errors
// 1. using .catch()
// Example
const promise = new Promise((resolve, reject) => {
    reject('Failed to fetch data');
});

promise
    .then(result => console.log(result)) // Won't execute
    .catch(error => console.log('Error:', error)); // Logs: "Error: Failed to fetch data"


// Using .then() with a Second Callback

const promise1 = new Promise((resolve, reject) => {
    reject('Failed to load resource');
});

promise1.then(
    result => console.log(result), // Won't execute
    error => console.log('Error:', error) // Logs: "Error: Failed to load resource"
);


// 3. Combining .then() and .catch()
// Example
const promise2 = new Promise((resolve, reject) => {
    throw new Error('Unexpected issue');
  });
  
  promise2
    .then(result => console.log(result))
    .catch(error => console.log('Caught error:', error)); // Logs: "Caught error: Error: Unexpected issue"
  

// 4. Handling Errors in Multiple Promises .all() or .allSettled()
// Example
Promise.all([
    Promise.resolve('Task 1'),
    Promise.reject('Task 2 failed'),
    Promise.resolve('Task 3')
])
.then(results => console.log(results))
.catch(error => console.log('Error in one task:', error)); // Logs: "Error in one task: Task 2 failed"


