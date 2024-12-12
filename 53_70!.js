//  53. Calculate 70! with high precision (all digits)

function factorial(n){
    let result = BigInt(1);
    for(let i=2; i<= n; i++){
        result  *= BigInt(i);
    }

    return result;

}

console.log(factorial(70).toString());
