// 52. Calculate Fibonacci(500) with high precision (all digits)

function fibonacci(n) {
    let a = BigInt(0);
    let b = BigInt(1);

    for(let i =2; i <= n; i++){
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(fibonacci(500).toString());




