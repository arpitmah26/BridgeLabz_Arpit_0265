// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both


// function symmetricDifference(arr1, arr2){
//     return[
//         ...arr1.filter(num => !arr2.includes(num)),
//         ...arr2.filter(num => !arr1.includes(num))
//     ];

// }

// let array1 = [1,2,3];
// let array2 = [3,4,5];
// console.log(symmetricDifference(array1,array2));


// alternative

function symmetricDifference(arr1, arr2){
    let result = [];
    for(let i=0; i< arr1.length; i++){
        let found = false;
        for(let j=0; j< arr2.length; j++){
            if(arr1[i] === arr2[j]) {
                found = true;
                break;
            }
        }
        if(!found) result[result.length] = arr1[i];
    }

    for(let i=0; i<arr2.length; i++){
        let found = false;
        for(let j=0; j< arr1.length; j++){
            if(arr2[i] === arr1[j]){
                found = true;
                break;
            }
        }
        if(!found) result[result.length] = arr2[i];
    }
    return result;
}

let array1 = [1,2,3];
let array2 = [3,4,5];
console.log(symmetricDifference(array1, array2));


