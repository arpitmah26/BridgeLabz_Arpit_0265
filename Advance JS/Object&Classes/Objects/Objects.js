// Definition: An object is a collection of key-value pairs 
// where the key is a string (or a symbol) and the value can be 
// anything (primitive, function, or another object). Objects allow 
// us to group related data and functionality together.


// Creating an object using Literals:

const person = {
    name: "Arpit",
    age: 21,
    greet: function(){
        console.log("Hello," + this.name);
        
    }
};


console.log(person.name);
person.greet();


// Using the object constructor

const car  = new Object();
car.make = "Toyota";
car.model = "Camry";
car.start = function() {
    console.log("Car started!");
    
};

console.log(car.make);
console.log(car.model);

car.start();


//accessing and modifying properties

//dot notation
const carr  ={make: "Toyota", model: "corolla"};
console.log(carr.make);

//Bracket notation

const key = "make";
console.log(car[key]);

// const obj = {"first-name":"Arpit"};
// console.log(obj["first-name"]);


//adding prop
car.year =2020;
car.model = "Camry"
console.log();

//delete prop

delete car.year;
console.log(car);


const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));  
console.log(Object.values(obj)); 
console.log(Object.entries(obj)); 

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});




