

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