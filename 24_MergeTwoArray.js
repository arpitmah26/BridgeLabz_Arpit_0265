// 24. Merge Two Arrays

function mergeArrays(arr1, arr2){
    return[...arr1, ...arr2];
}

let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(mergeArrays(arr1, arr2));


// alternative solution

function mergedArray(arr1, arr2){
    let merged = [];
    for(let i=0; i< arr1.length; i++){
        merged[merged.length] = arr1[i];
    }
    for(let i=0; i < arr2.length; i++){
        merged[merged.length] = arr2[i];
    }
    return merged;
}

let array1 = [1,2,3];
let array2 = [3,4,5];

console.log(mergedArray(array1, array2));
