// Promise Methods

// Promise.resolve(value)
// Promise.reject(reason)
// Promise.all(promises)
// Promise.allSettled(promises)
// Promise.race(promises)
// Promise.any(promises)
// promise.then(onFulfilled, onRejected)
// promise.catch(onRejected)
// promise.finally(onFinally)


// Promise.resolve(value) : Creates a resolved promise with the given value.
// Useful for wrapping non-promise values into a promise

// Example
Promise.resolve(41).then(result => {
    console.log(result);
    
})


// Promise.reject(reason) Creates a rejected promise with the given reason (error).
// Useful for testing error handling

// Example

Promise.reject('error').catch(error => {
    console.log(error);
})


// Promises.all


// Example

Promise.all([
    Promise.resolve(1),
    Promise.resolve(3),
    Promise.resolve(2)
]).then(values => {
    console.log(values);
    
})


// // Promise.allSettled(promises)

// Example
Promise.allSettled([
    Promise.resolve(1),
    Promise.reject('Error!'),
    Promise.resolve(3)
  ]).then(results => {
    console.log(results);
    // [
    //   { status: 'fulfilled', value: 1 },
    //   { status: 'rejected', reason: 'Error!' },
    //   { status: 'fulfilled', value: 3 }
    // ]
  });


// Promise.race(promises)

// Example

Promise.race([
    new Promise(resolve => setTimeout(() =>  resolve("fast!"), 100)),
    new Promise(resolve => setTimeout(() => resolve("slow!"), 500))
]).then(value => {
    console.log(value);
    
})


// Promises.any(promises)

// Example
Promise.any([
    Promise.reject("Error1!"),
    Promise.reject("Error2!"),
    Promise.resolve(1)
]).then(values => {
    console.log(values);
    
}).catch(error => {
    console.error(error)
});


// promise.then(onFulfilled, onRejected)

// Example

Promise.resolve('Success!').then(
    value => console.log(value),  // "Success!"
    error => console.log(error)
  );
  

// Promise.catch(onRejected)

// Example
  Promise.reject('Error!').catch(error => {
    console.log(error); // "Error!"
  });
  

// Promise.finally(onFinally)

// Example
  Promise.resolve('Done!')
  .finally(() => console.log('Cleanup'))
  .then(value => console.log(value)); 
  // Output: "Cleanup", "Done!"
