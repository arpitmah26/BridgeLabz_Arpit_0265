// 5. Find  Missing Number 
// Given an array of size n, containing numbers from 1 to n+1, find the missing number.


function missingNumber(arr){

    let n = arr.length +1;
    let total  =(n * (n +1)) / 2;
    let sum = arr.reduce((a,b) => a + b, 0);

    return total - sum;

}

// console.log(missingNumber([1,2,3,4,5,6,7,8,9,12,14]));
console.log(missingNumber([1,2,3,4,8]));
