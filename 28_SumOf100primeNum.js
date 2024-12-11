// 28. Calculate the Sum of the First 100 Prime Numbers and Return Them in an Array


function isPrime(n){
    if(n < 2) return false;
    for(let i=2; i < Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
} 

function first100Primes(n){
    let count =0; num=2;
    while(count < n){
        if(isPrime(num)){
            console.log(num);
            count++;
            
        }
        num++;
    }
}

function sumOfPrimes(primes){
    let sum =0;
    for(let i=0; i < primes.lengtj; i++){
        sum += primes[i];
    }
    return sum;
}

const primes = first100Primes();

const sum = sumOfPrimes(primes);

console.log("First 100 primes:", primes);
console.log("Sum of first 100 pirmes:", sum);
