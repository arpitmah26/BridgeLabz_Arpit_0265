// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.

// function difference(arr1, arr2){
//     return arr1.filter(num => !arr2.includes(num));
// }

// let array1 = [1,2,3,4];
// let array2 = [3,4,5,6];
// console.log(difference(array1,array2));



// alternative

function difference(arr1, arr2){
    let result =[];
    for(let i=0;  i< arr1.length; i++){
        let found = false;
        for(let j=0; j< arr2.length; j++){
            if(arr1[i] === arr2[j]) {
                found = true;
                break;
            }
        }
        if(!found) result[result.length]  =arr1[i];
    }
    return result;
}

let array1 = [1,2,3,4];
let array2 = [3,4,5,6];
console.log(difference(array1, array2));
