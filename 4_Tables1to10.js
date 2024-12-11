// 4. Print all the multiplication tables with numbers from 1 to 10

// const prompt = require('prompt-sync');


// using for loop
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication Table for ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(''); 
  }
  

// using while loop
// let i =1;
// while(i <= 10){
//     let j=1;
//     console.log(`Multiplication Table for ${i}`);
//     while(j <= 10){
//         console.log(`${i} x ${j} = ${i * j}`);
//         j++;
//     }
//     console.log("");
//     i++;
// }