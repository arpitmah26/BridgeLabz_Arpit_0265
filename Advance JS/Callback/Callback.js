// Callbacks in JavaScript
// A callback is a function passed as an argument to another function, which is then executed (called back) after some kind of operation is completed. Callbacks are widely used in JavaScript, especially for handling asynchronous operations like fetching data, reading files, or responding to events.


// Passing a Function as a arguement:

// Synchronous vs Asynchronous Callbacks:

// Example

function greet(name){
    console.log(`Hello ${name}!`);

}

function userInput(calllback){
    const name ="Arpit";
    calllback(name);
}

userInput(greet);


// Example

document.getElementById("btn").addEventListener("click", function(){
    console.log("Button Clicked!");
    
})