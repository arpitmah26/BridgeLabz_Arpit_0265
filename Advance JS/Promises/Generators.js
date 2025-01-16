// An async generator is a special type of function that combines the features of generators and async functions.

//  use yield to produce or pause the execution
// use await inside the generator to handle asynchronous operations like promises.

// syntax

async function* asyncGenerator(){
    // code 
}

// Example
async function* asyncGenerator() {
    for (let i = 1; i <= 3; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async delay
        yield i;
      }
  }
    (async () => {
      for await (let value of asyncGenerator()) {
        console.log(value); // Outputs 1, 2, 3 with a 1-second delay between
      }
    })();

// we can use async generator with for await..of
//  also with next() method.