// 50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.

function uniqueRandomNumbers(n){
    const result =[] ;
    
    while(result.length < n){
        const randomNum = Math.floor(Math.random()* n) + 1;

        if(!result.includes(randomNum)){
            result.push(randomNum);
        }
    }
    return result;
}

console.log(uniqueRandomNumbers(5));
console.log(uniqueRandomNumbers(10));
console.log(uniqueRandomNumbers(3));
