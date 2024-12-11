// Reverse an Array

let arr = [1,2,3,4,5];

for(let i =arr.length - 1; i >=0; i--){
    console.log(arr[i]);
}

// creating new array and returning in it

let array = [1,2,3,4,5];
function reverseArray(arr){
    let reversed = [];
    for(let i=arr.length -1; i >= 0; i--){
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseArray(array));


// using in-built feature

function reversedArray(arr){
    return arr.reverse();
}

let array1 =[34,32,123,4,51];
console.log(reversedArray(array1));
