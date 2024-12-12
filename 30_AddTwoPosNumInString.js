// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.


// function addLargeNumbers(num1, num2) {
//     return (BigInt(num1) + BigInt(num2)).toString();
// }

// // Example Usage
// let num1 = "987654321987654321987654321";
// let num2 = "123456789123456789123456789";
// console.log(addLargeNumbers(num1, num2));


// function addLargeNumbers(num1, num2){
//     let sum = BigInt(num1) + BigInt(num2);

//     return sum.toString();
// }

let num1 = "1223445442213";
let num2 = "1234456988765";
let sum  = BigInt(num1) + BigInt(num2);
let result = String(sum);
console.log(result);
console.log(typeof(result));




