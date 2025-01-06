// Merge Sort

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; 
    }
  
    const mid = Math.floor(arr.length / 2); 
    const left = mergeSort(arr.slice(0, mid)); 
    const right = mergeSort(arr.slice(mid)); 
  
    return merge(left, right); 
  
  function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}  
  const array = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(array);
  console.log(sortedArray); 
