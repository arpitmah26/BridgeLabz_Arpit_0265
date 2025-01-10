// Promise: It's a way to handle asynchronous operation is JS. Promises represent a alue that may be available now, or in the future, or never. 
// Promises help avoid  "Callback hell" and make aynchronous code easier to read and maintain.


// creating a promise

let promise  =new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("successful");
        
    }else{
        reject("failed");
        
    }
});

// To handle result of promise we use:
// .then():
// .catch():
//  .finally():

promise.then(result => console.log(result)).catch(resilt => console.error(error)).finally(result => console.log("done"));

// task execution

const firstTask = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("First task done"), 1000);
    });
};

const secondTask = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Second task done"), 2000);
    });
}

// chaining
firstTask()
.then(result => {
    console.log(result);
    return secondTask();
    
})
.then(result => console.log(result))
.catch(result =>  console.error(error));


// parallel execution with Promise.all
const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Hello!"));
const promise3 = Promise.resolve([1,2,3]);

Promise.all([promise1, promise2, promise3])
.then(results => console.log("All results:", results ))
.catch(error => console.error("Error in one of the promises:", error));




// Promises Chaining
// Promise chaining is a technique in JavaScript where multiple asynchronous 
// operations are executed in sequence, with each operation waiting for the 
// previous one to complete. It allows you to handle complex workflows in a clean
//  and readable way by linking .then() calls one after another.

// Example Simple addition

const add = (num) => {
    return Promise.resolve(num+1);
};

add(1) //start with 1
.then(result => {
    console.log(result); // o/p 2
    return add(result);  //Add 1 to 2
    
})
.then(result => {
    console.log(result);  //3
    return add(result);
})
.then(result => {
    console.log(result); // 4
    return add(result);
})
.then(result => {
    console.log(result); // 5
    
})