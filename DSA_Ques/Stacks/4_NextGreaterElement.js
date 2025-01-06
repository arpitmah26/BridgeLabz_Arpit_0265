// 4) Next Greater Element
// Given an array, for each element, find the next greater element in the array using a stack.


function grtrele(nums) {
    const stack = [];
    const result = Array(nums.length).fill(-1); 
    
    for (let i = nums.length - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
        stack.pop();
      }
      
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
      }
      
      stack.push(nums[i]);
    }
    
    return result;
  }
  
  console.log(grtrele([4, 5, 2, 10])); 
  console.log(grtrele([3, 8, 4, 1, 2])); 