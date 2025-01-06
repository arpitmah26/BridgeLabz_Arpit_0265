// 8) Intersection of Two Arrays
// Given two arrays, find their intersection.



function intersection(nums1, nums2) {
    const hashTable = {};
    const result = [];
  
    for (const num of nums1) {
      hashTable[num] = true;
    }
  
    for (const num of nums2) {
      if (hashTable[num]) {
        result.push(num);
        delete hashTable[num];
      }
    }
  
    return result;
  }
  
  console.log(intersection([1, 2, 2, 1], [2, 2]))