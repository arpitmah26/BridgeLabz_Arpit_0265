// Basics
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Accessing Array Elements
// console.log(a[0]);
// console.log(a[1]);

// accessing 1st element
let fst = a[0];
// console.log(fst);

//accessing last element
let lst = a[a.length-1];
// console.log(lst);

a[1] = "Bootstrap"
// console.log(a);

// adding elements to array
a.push("Node JS");
a.push("Web Dev");

console.log(a);


//removing elements from arr
a.pop();
//a.unshift();
console.log(a);


let len = a.length;
// console.log(len);

// a.length = 7;
// console.log(a);

//iterating through array elements
for(let i=0; i< a.length; i++){
    console.log(a[i]);
    
}
let concateArr = a.concat(a);
console.log(concateArr);

console.log(a.toString());

console.log(typeof a);


//recognizing a js array
const courses = ["HTML", "CSS", "Javascript"];
console.log("Using Array.isArray() method: ", Array.isArray(courses))
console.log("Using instanceof method: ", courses instanceof Array)