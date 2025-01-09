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
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('Network error'), 1000);
    });
  }
  
  fetchData()
    .then(data => console.log('Data:', data))
    .catch(error => console.log('Error occurred:', error)) // Logs: "Error occurred: Network error"
    .finally(() => console.log('Operation completed')); // Logs: "Operation completed"
  