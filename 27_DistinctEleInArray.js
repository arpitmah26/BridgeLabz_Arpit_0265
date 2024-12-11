// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function distinctElements(arr){
    return [...new Set(arr)];
}

let array1 = [1,2,3,4,4,4,,5,6,7,8,7,65,5,4];
console.log(distinctElements(array1));

//alternative

function distinctElement(arr){
    let result =[];
    for(let i=0; i < arr.length; i++){
        let found = false;
        for(let j=0; j<result.length; j++){
            if(arr[i] === result[j]) {
                found = true;
                break;
            }
        }
        if(!found) result[result.length] = arr[i];
    }
    return result;
}

let array2 = [1,2,3,4,5,4,3,5,3,2,6,7,8,5,4,7,99,8,7];
console.log(distinctElement(array2));
