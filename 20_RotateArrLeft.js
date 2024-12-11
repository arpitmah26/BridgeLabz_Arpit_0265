// 1. Rotate an array to the left by 1 position


function RotateLeft(arr){
    if(arr.length === 0) return arr;
    const firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
}
let array1 = [1,2,3,4,5];
console.log(RotateLeft(array1));



