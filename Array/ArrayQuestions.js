// Sort an array in ascending order
const arr =[12,3,4,15,3];
arr.sort((a,b) => a-b);
console.log(arr);


// filter even numbers

const arr1 = [1,2,3,4,33,44,22,11,12,24,3];
const filteredArr  =arr1.filter(num => num % 2 !== 0 );
console.log(filteredArr);


//map -> double the values

const arr2 = [1,2,3,4];
const doubledArr = arr2.map(num => num*2);
console.log(doubledArr);


// reduce find sum of all nums
const arr3 = [1,2,3,4,5];
const summedArr = arr3.reduce((acc, curr) => acc +curr, 0 );
console.log(summedArr);


// Find first occurrence of a value

const arr4 = [2, 4, 6, 8, 10];
const found = arr4.find(num => num > 5); 
console.log(found)


//Reverse rthe array

const arr5 = [1, 2, 3, 4, 5];
const reversedArr = arr5.reverse();  
console.log(reversedArr);



//check if an element exists in array

const arr6 = [1, 2, 3, 4];
const exists = arr6.includes(3);
console.log(exists);



// find index of an element

const arr7 = [10, 20, 30, 40, 50];
const index = arr7.indexOf(30);
console.log(index)


// check if every elements satisfy a condition

const arr8 = [1, 2, 3, 4];
const allPositive = arr8.every(num => num > 0); // Checks if all elements are positive
console.log(allPositive); // Output: true

const arr9 = [-1, 2, 3];
const allPositive2 = arr9.every(num => num > 0); // Checks if all elements are positive
console.log(allPositive2);



// check if any element satisfies a condition

const arr10 = [2, 5, 7, 12, 8];
const someGreaterThan10 = arr10.some(num => num > 10); // Checks if any element is greater than 10
console.log(someGreaterThan10); // Output: true

const arr11 = [2, 5, 7, 8];
const someGreaterThan10_2 = arr11.some(num => num > 10); // Checks if any element is greater than 10
console.log(someGreaterThan10_2);


// flatten a nested array 
const arr12 = [[1, 2], [3, 4], [5, 6]];
const flattenedArr = arr12.flat(); // Flattens one level deep
console.log(flattenedArr)



// join arrays elements into a string 
const arr13 = [1, 2, 3, 4];
const joinedStr = arr13.join('-'); // Joins elements with a separator
console.log(joinedStr)