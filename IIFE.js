/*
An IIFE {Immediately inovked function expression} in javascript is a function which is invoke or called immediately after it's creation. It is mostly used to create a new scope or avoid polluting the namespace.
*/

//syntax
// (function() {
//     // Code here runs immediately
//     console.log("This is an IIFE");
// })();


//iife using arrow function
// (() => {
    // console.log("This is an IIFE using an arrow function");
// })();


// Use cases:
// * 1. Encapsulation
/*
(function(){
    const privateVar = "This is private";
    console.log(privateVar);
    
})();
*/


// 2. Avoiding global namespace pollution:


// (function(){
//     const library = {};
//     library.name = "Mylibrary";
//     console.log(library.name);
    
// })();

// 3.Using in loops
for(let i=0; i< 5;i++){
    (function(index){
        setTimeout(() => console.log(index), 1000);
    })(i); 
}

// When to Use Which
// Use IIFE:
// When you need to execute code immediately.
// To create a private scope for variables.
// For initialization or setup logic.
// Use NFE:
// When recursion is required without relying on external variables.
// To improve debugging with named stack traces.
// For self-referencing functions in complex logic.
