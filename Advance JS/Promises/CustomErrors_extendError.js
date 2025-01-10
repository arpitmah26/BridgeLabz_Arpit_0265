// Custom errors in JavaScript are user-defined error types that extend the built-in error classes like Error, TypeError, or RangeError. They allow developers to throw and handle more descriptive and domain-specific errors in their applications, making debugging and error handling easier.


//  we use custom errors becuase it helps to clearly identify the source of an error.

//  we create custom error by extending Error class



//   Extending Error in js
// it is nothong but means creating a custom error class that inherits from the built.in Error class. By doing this, we can define our own error types with custom properties and behaviour.

// Why Extend Error: 
// helps distinguish between different kinds of error.
// allows more descriptive error messages
// Retains useful props like stack(for debugging).


// How to extend Error:

class CustomError extends Error{
    constructor(message){
        super(message); // will help to obtain props of Error class
        this.name = "Custom Error";
    }
}


try{
    throw new CustomError("Something went wrong!");
} catch(error){
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
    // console.log(error.error);
}




