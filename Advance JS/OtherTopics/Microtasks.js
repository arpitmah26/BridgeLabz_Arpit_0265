// Microtasks are a special type of asynchronous operation in JavaScript. They are scheduled to be executed after the currently executing code (synchronous tasks) but before any pending macrotasks (e.g., setTimeout, setInterval).

// Microtasks ensure higher-priority execution and are part of the event loop, making them crucial for optimizing asynchronous code execution


// the most common  ways to schedule microtasks in js are:
// 1. Promises(.then, .catch, .finally callbacks)
// queueMicrotask API

// Example

console.log("start");
Promise.resolve().then(() => {
    console.log("Microtask 1: Promise callback");
    
});
console.log("End");


console.log("start");
setTimeout(() => {
    console.log("Marcotask: setTimeout");
    
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask Promise");
    
});
console.log("End");

// queueMicrotask
console.log("Start");

queueMicrotask(() => {
    console.log("Microtask: queueMicrotask");
});

console.log("End");


// use cases Examples


async function example() {
    console.log("Before await");
    await Promise.resolve();
    console.log("After await");
}

example();
console.log("End");

