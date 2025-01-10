// // Promise Methods

// // Promise.resolve(value)
// // Promise.reject(reason)
// // Promise.all(promises)
// // Promise.allSettled(promises)
// // Promise.race(promises)
// // Promise.any(promises)
// // promise.then(onFulfilled, onRejected)
// // promise.catch(onRejected)
// // promise.finally(onFinally)


// // Promise.resolve(value) : Creates a resolved promise with the given value.
// // Useful for wrapping non-promise values into a promise

// // Example
// Promise.resolve(41).then(result => {
//     console.log(result);
    
// })


// // Promise.reject(reason) Creates a rejected promise with the given reason (error).
// // Useful for testing error handling

// // Example

// Promise.reject('error').catch(error => {
//     console.log(error);
// })


// // Promises.all


// // Example

// Promise.all([
//     Promise.resolve(1),
//     Promise.resolve(3),
//     Promise.resolve(2)
// ]).then(values => {
//     console.log(values);
    
// })


// // // Promise.allSettled(promises)

// // Example
// Promise.allSettled([
//     Promise.resolve(1),
//     Promise.reject('Error!'),
//     Promise.resolve(3)
//   ]).then(results => {
//     console.log(results);
//     // [
//     //   { status: 'fulfilled', value: 1 },
//     //   { status: 'rejected', reason: 'Error!' },
//     //   { status: 'fulfilled', value: 3 }
//     // ]
//   });


// // Promise.race(promises)

// // Example

// Promise.race([
//     new Promise(resolve => setTimeout(() =>  resolve("fast!"), 100)),
//     new Promise(resolve => setTimeout(() => resolve("slow!"), 500))
// ]).then(value => {
//     console.log(value);
    
// })


// // Promises.any(promises)

// // Example
// Promise.any([
//     Promise.reject("Error1!"),
//     Promise.reject("Error2!"),
//     Promise.resolve(1)
// ]).then(values => {
//     console.log(values);
    
// }).catch(error => {
//     console.error(error)
// });


// // promise.then(onFulfilled, onRejected)

// // Example

// Promise.resolve('Success!').then(
//     value => console.log(value),  // "Success!"
//     error => console.log(error)
//   );
  

// // Promise.catch(onRejected)

// // Example
//   Promise.reject('Error!').catch(error => {
//     console.log(error); // "Error!"
//   });
  

// // Promise.finally(onFinally)

// // Example
//   Promise.resolve('Done!')
//   .finally(() => console.log('Cleanup'))
//   .then(value => console.log(value)); 
//   // Output: "Cleanup", "Done!"


// // Question which uses most of the methods combinely
// // Example handling multiple tasks 

// Simulating various tasks with promises
function task1() {
    return new Promise(resolve => setTimeout(() => resolve('Task 1 completed'), 1000));
  }
  
  function task2() {
    return new Promise((resolve, reject) => setTimeout(() => reject('Task 2 failed'), 1500));
  }
  
  function task3() {
    return new Promise(resolve => setTimeout(() => resolve('Task 3 completed'), 500));
  }
  
  // Using Promise.resolve and Promise.reject
  const resolvedTask = Promise.resolve('Task resolved immediately');
  const rejectedTask = Promise.reject('Task rejected immediately');
  
  // Using Promise.any to get the first fulfilled promise
  Promise.any([task1(), task2(), task3()])
    .then(result => {
      console.log('First fulfilled task:', result); // Logs result of the first resolved task
    })
    .catch(error => {
      console.log('Error in any:', error); // If all promises reject, this will run
    });
  
  // Using Promise.race to get the first settled promise (either resolve or reject)
  Promise.race([task1(), task2(), task3()])
    .then(result => {
      console.log('First settled task (either resolve or reject):', result);
    })
    .catch(error => {
      console.log('Error in race:', error); // If the first promise rejects, this will run
    });
  
  // Using .then and .catch for handling individual promises
  resolvedTask
    .then(result => {
      console.log(result); // Logs: 'Task resolved immediately'
    })
    .catch(error => {
      console.log('Error in resolved task:', error);
    });
  
  rejectedTask
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error); // Logs: 'Task rejected immediately'
    });
  

