
// 17. Calculate the sum of digits of a positive integer number

function sumOfDigits(num){
    let sum =0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(sumOfDigits(12345));


//alternative method

// function sumOfDigitss(num){
//     return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
// }
// console.log(sumOfDigitss(44351));

