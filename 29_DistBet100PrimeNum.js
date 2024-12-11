// 29. Print the Distance Between the First 100 Prime Numbers

function isPrime(n){
    if(n < 2) return false;
    for(let i=2; i < Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
} 

function first100Primes() {
    let primes = [];
    let num = 2; // Start checking from 2
    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}


function distanceBetweenPrimes(primes){
    let distances = [];
    for(let i=1; i<primes.length; i++){
        distances.push(primes[i] - primes[i-1]);
    }
    return distances;

}
const primes = first100Primes();
const distances = distanceBetweenPrimes(primes);

console.log("Distance between primes:", distances);
