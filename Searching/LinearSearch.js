// Linear Search

function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}


const arr  =[10,30,20,33,40,50];
console.log(linearSearch(arr, 20));
console.log(linearSearch(arr,30))
console.log(linearSearch(arr,70));

