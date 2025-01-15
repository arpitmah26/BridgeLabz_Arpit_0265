// promises questions

// checkNumber

// const checkNumber = (num) => {
//     return new Promise((resolve, reject) => {
//         if(num > 10){
//             resolve("Num is greater than 10");
//         }else{
//             reject("Num is less than 10");
//         }
//     });
// };


// checkNumber(4)
// .then(result => console.log(result))
// .catch(result => console.error(error));



// Example of Error Handling
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => reject('Network error'), 1000);
//     });
//   }
  
//   fetchData()
//     .then(data => console.log('Data:', data))
//     .catch(error => console.log('Error occurred:', error)) // Logs: "Error occurred: Network error"
//     .finally(() => console.log('Operation completed')); // Logs: "Operation completed"
  

// Custom Error question: Validation age of user example

// class ValidationErrror extends Error{
  // constructor(message){
//     super(message)
//       this.name = "ValidationError";
//   }
// }

// function checkAge(age){
//   if(age < 18){
//     throw new ValidationErrror("Age must be atleast 18.");
//   }
// }

// try{
//   checkAge(16);
// }catch(error){
//   console.log(error.name);
//   console.log(error.message);
  
// }

// Handling multiple custom errors using extend Error

// class NetworkError extends Error{
//   constructor(message){
//     super(message);
//     this.name = "NetworkError";
//   }
// }

// function fetchData(){
//   const success = false;
//   if(!success){
//     throw new NetworkError("failed to fetch data");
//   }
// }

// try{
//   fetchData();

// }catch(error){
//   console.log(error.name);
//   console.log(error.message);
  
// }


// async/await 

async function getMessage() {
  return "Hello";
}

async function combineMessages() {
  let message = await getMessage();
  return `${message}, Async World!`;
}

combineMessages().then(console.log); // Logs: Hello, Async World!


// example 2
async function fetchData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  let data = await response.json();
  console.log(data);
}

fetchData();