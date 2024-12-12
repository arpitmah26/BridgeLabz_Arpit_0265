// function binaryToNumber(binaryString){
//     return parseInt(binaryString, 2);
// }

// console.log(binaryToNumber('1011'));
// console.log(binaryToNumber('1001'));
// console.log(binaryToNumber('1010'));


//alternative


function binaryToNumber(binaryString) {
    let number = 0;
    let power = 1; 

    
    for (let i = binaryString.length - 1; i >= 0; i--) {
        const digit = Number(binaryString[i]); 
        number += digit * power; 
        power *= 2; 
    }

    return number;
}


console.log(binaryToNumber("1010")); 
console.log(binaryToNumber("1101")); 
console.log(binaryToNumber("100111"));  
