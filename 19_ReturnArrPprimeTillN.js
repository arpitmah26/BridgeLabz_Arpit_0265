// Create a function that will return  an array the first “p” prime numbers greater than “n”

function isPrime(n){
    if(n <2) return false;
    for(let i=2; i<Math.sqrt(n); i++){
        if(n%i == 0) return false;
    }
    return true;
}


// function prime(num ,c){
//     let arr = [];
//     if(isPrime(num)){
//         arr.push(num);
//     }
//     else{
//         console.log("Not a prime");
//     }
//     let i =num;
//     while(c > 0){
//         if(isPrime(i)){
//             arr.push(i);
//             c--;
//         }
//         if(c===0){
//             break;
//         }
//         i++;
//     }
//     return arr;
// }
// let count = 10;
// let n = 200;
// console.log(prime(n,count));

function prime(num,c){
    let arr  =[];
    if(isPrime(num)){
        arr.push(num);
    }else{
        console.log("Not prime");       
    }
    let i =num;
    while(c > 0){
        if(isPrime(i)){
            arr.push(i);
            c--;
        }
        if(c == 0){
            break;
        }
        i++;
    }
    return arr;
}

let count =40;
let n = 200;
console.log(prime(n,count));
