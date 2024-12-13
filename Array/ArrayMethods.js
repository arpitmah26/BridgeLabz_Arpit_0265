// Array Methods

// Array length

let courses = ["HTML", "CSS", "JavaScript", "React"];

// console.log(courses.length);


// Array toString() Method

// console.log(courses.toString());


// join()
// console.log(courses.join('|'));


// delete operator
// delete object
// // or
// delete object.property
// // or
// delete object['property']

let emp = {
    firstName : "Arpit",
    lastName : "Mahajan",
    salary: 70000
}

// console.log(delete emp.salary);
// console.log(emp);


//concat
let arr1 = [11, 12, 13];
let arr2 = [14, 15, 16];
let arr3 = [17, 18, 19];

let newArr = arr1.concat(arr2, arr3);
// console.log(newArr);


// flat() method
// const arr = [['1','2'],'3',['4','5','6'],'8'];

// const flatArr = arr.flat(Infinity);
// console.log(flatArr);

//push()
// let array = [11, 12, 13];

// array.push(40);
// array.push(50);
// array.push(60);

// console.log(array);


//unshift

// array.unshift(10);
// console.log(array);

//pop

// array.pop();
// console.log(array);


//shift
// array.shift();
// console.log(array);

//splice()
let numArr = [20, 30, 40, 50,69,60,70,80,90];

// numArr.splice(1,3);
// numArr.splice(1,0,3,4,5);
// console.log(numArr);


//slice()

// let case1 = numArr.slice(0,3);
// console.log(case1);


// some()

function isGreaterThan5(element, index, array){
    return element > 5;
}
let array = [2,3,4,5,1,8];
let value = array.some(isGreaterThan5);

console.log(value);


//reduce()

// Original array
let arr = [4,9,16,25];


// let sub = arr.reduce(geeks);

// function geeks(total, num) {
//     return total - num;
// }

// console.log(sub);


//map()
let sub = arr.map(geeks);

function geeks() {
    return arr.map(Math.sqrt);
}

console.log(sub);


//reverse()

arr.reverse();
console.log(arr);

//values()

const fruits = ["Apple", "Banana", "Cherry"];

const iterator = fruits.values();


for (const value of iterator) {
  console.log(value);
}