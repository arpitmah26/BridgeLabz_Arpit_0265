// 1. Find the largest Sum Contiguouss Subarray

function maxSubArray(arr){
    let maxSoFar = arr[0];
    let maxEnding  =arr[0];

    for(let i =0; i < arr.length; i++){
        maxEnding = Math.max(arr[i], maxEnding + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEnding);
    }
    return maxSoFar;
}

console.log(maxSubArray([-2,1,-3,4,-1,-2,1,-5,4]));
