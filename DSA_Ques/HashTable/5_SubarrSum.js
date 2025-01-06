// 5) Subarray Sum Equals K
// Given an array and a target sum k, find the number of subarrays that sum up to k.


function subarraySum(nums, k) {
    const hashTable = { 0: 1 }; 
    let sum = 0;
    let count = 0;
  
    for (const num of nums) {
      sum += num;
  
      if (hashTable[sum - k] !== undefined) {
        count += hashTable[sum - k];
      }
  
      hashTable[sum] = (hashTable[sum] || 0) + 1;
    }
  
    return count;
  }
  
  console.log(subarraySum([1, 1, 1], 2)); 