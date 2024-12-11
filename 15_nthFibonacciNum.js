
// 15. Create a function that will find the nth Fibonacci number using recursion

function Fibonacci(n){
    if(n <= 1) return n;
    return Fibonacci(n-1) + Fibonacci(n-2);
}
console.log(Fibonacci(10));

