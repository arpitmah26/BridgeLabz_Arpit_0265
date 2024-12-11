
// 18. Print the first 100 prime numbers

function isPrime(num){
    if(num < 2) return false;
    for(let i=2; i<Math.sqrt(num); i++){
        if(num % i === 0) return false;
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
first100Primes(100);

