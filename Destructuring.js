/*
Destructuring in JavaScript is a convenient syntax for extracting values from arrays or 
properties from objects and assigning them to variables. It simplifies the process of 
working with complex data structures and makes your code cleaner and more readable
*/


// Destructuring Arrays

// When working with arrays, destructuring allows you to assign elements of an array to individual variables in a single statement.

// const colors = ["Red", "Blue", "Green"];

// const [first, second, third] = colors;

// console.log(first);
// console.log(second);
// console.log(third);

// Skipping elements
// const numbers  =[1,2,3,4];

// const[, second, fourth] = numbers;
//  console.log(second, fourth);

 //default values

//  const[x, y =10] = [5];
//  console.log(x,y);
 
// Destructuring objects

// const user = {name: "Arpit", age: 21, location: "India"};

// const {name, age,location} =user;

// console.log(name);
// console.log(age);
// console.log(location);


//NESTED DESTRUCTURING

const numbers = [1, [2,3],4,5];
const [first, [second, third],fourth, fifth] = numbers;
console.log(first, second,third,fourth, fifth);

//NESTED OBJECTS

const employee ={
    name: "arpit",
    job: {
        title: "Software Developer",
        department: "IT"
    }
};

const {job: {title, department}} = employee;
console.log(title, department);



