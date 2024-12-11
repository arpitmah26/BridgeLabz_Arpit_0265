

// 5. Calculate the sum of numbers from 1 to 10


// let sum =0;
// for(let i=1; i<=10; i++){
//     sum+=i;
    
// }
// console.log(sum);

const number = [1,2,3,4,5,6,7,8,9,10];
const sum = number.reduce((acc, curr)=>acc+curr,0);
console.log(sum);
