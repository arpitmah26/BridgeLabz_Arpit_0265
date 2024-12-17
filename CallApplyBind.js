// Call Method

// call, apply, bind are methods of function  prototype that allow us to control the value of 'this' .


// call invokes a function immediately with a specified 'this' value and arguments passed one by one.

//syntax

// func.call(thisArg, arg1, arg2, ...);


// example

//  function greet(greeting, punctuation){
//     console.log(`{greeting}, ${this.name}${punctuation}`);
    
//  }

//  const person ={name:"Arpit"};

//  greet.call(person, 'hello', '!');


 //2. Apply() -> it is simi;lar to call, but it takes the arguements as an array(or an array-like object).

 //syntax

//  function.apply(thisArg, [argsArray])


// example


// function greet(greeting, punctuation){
//     console.log(`${greeting}, ${this.name}${punctuation}`);
    
// }


// const person = {name: 'Bob'};

// greet.apply(person, ['Hi', '!']);


//Bind() -> It returns a new function with a specified this value. Unlike call and apply, it does not invoke the function immediately.

//syntax
// const boundFunc = function.bind(thisArg ,arg1, arg2, ...);


function greet(greeting, punctuation){
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person = {name: "Arpit"};

const boundFunc = greet.bind(person, "Hey"); 

boundFunc('!');

