
// 6. Calculate 10!

function fact(n){
    if (n == 0 || n === 1){
        return 1;
    }
    return n*fact(n-1);
}
console.log("factorial of 10 is: " + fact(10));


// let factorial = 1;
// for (let i = 1; i <= 10; i++) {
//   factorial *= i;
// }
// console.log(`10! (factorial of 10) is: ${factorial}`);