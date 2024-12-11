
// 14. Print the first 10 Fibonacci numbers without recursion

function Fibonacci(){
    let a =0, b=1, temp;
    console.log(a);
    console.log(b);
    for(let i=2; i< 10; i++){
        temp = a+b;
        console.log(temp);
        a=b; 
        b=temp;      
    }   
}
Fibonacci();


//alternative
function generateFibonacci(n){
    const fib = [0,1];
    for(let i=2; i<n; i++){
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}
console.log(generateFibonacci(10));


/*
function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

*/