// 4) Find All Duplicates in an Array
// Given an array, find all elements that appear twice.

function duplicate(nums) {
    const hashTable = {};
    const result = [];
  
    for (const num of nums) {
      hashTable[num] = (hashTable[num] || 0) + 1;
    }
  
    for (const num in hashTable) {
      if (hashTable[num] === 2) {
        result.push(Number(num));
      }
    }
  
    return result;
  }
  
  console.log(duplicate([4, 3, 2, 7, 8, 2, 3, 1])); 