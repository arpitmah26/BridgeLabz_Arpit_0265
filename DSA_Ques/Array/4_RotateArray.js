// 4. Rotate an Array.
// Given an array and a number k, rotate the array to the right by k steps.


function rotateArray(arr, k){
    k = k % arr.length;

    arr.reverse();
    reverse(arr, 0, k-1);
    reverse(arr,k, arr.length -1);

    return arr;
}


function reverse(arr, start, end){
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

console.log(rotateArray([1,2,3,4,5,6,7],1));
