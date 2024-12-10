// Scheduling 
/*
Scheduling in JavaScript refers to the ability to execute code at a specific time in the future or repeatedly at set intervals. JavaScript provides built-in methods for scheduling tasks asynchronously: setTimeout and setInterval

*/

// //1. Set timeout
// setTimeout
// The setTimeout method schedules a single execution of a function after a specified delay.

// Syntax
// let timeoutID = setTimeout(callback, delay, [arg1, arg2, ...]);


//example
setTimeout(() => {
    console.log('Hello, world!');
}, 1000); // Executes after 1 second


//cancelling

let timer = setTimeout(() => console.log('This will not run'), 1000);
clearTimeout(timer);


//2. setInterval
//syntax
let intervalID = setInterval(callback, delay, [arg1, arg2, ...]);


let counter = 0;
let interval = setInterval(() => {
    console.log(`Counter: ${++counter}`);
    if (counter === 5) {
        clearInterval(interval); // Stops the interval after 5 repetitions
    }
}, 1000);

//3. Zero delay scheduling

//4. requestAnimationFrame


// Best Practices
// * Use setTimeout for one-time delayed tasks.
// * Use setInterval cautiously, as it can lead to performance issues if not cleared.
// * Prefer requestAnimationFrame for animations to ensure smooth rendering.
// * Avoid nesting setTimeout or setInterval too deeply to prevent callback hell.

