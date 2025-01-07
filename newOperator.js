// The new operator in JavaScript is used to create an instance of a constructor function or a class. It creates a new object and binds the context (this) of the constructor to that new object.


// new example with a constructor function
function Person(name, age){
    this.name = name;
    this.age = age;

}

const person1 = new Person('Arpit',21);
console.log(person1.name);
console.log(person1.age);


//  new example with a class
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  }
  
  const car1 = new Car('Toyota', 'Corolla');
  console.log(car1.make);  // Output: Toyota
  console.log(car1.model); // Output: Corolla


  const obj = {};
//   const instance = new obj; // Error: obj is not a constructor
  

// You can only use new with functions (constructor functions) or classes. Attempting to use it with a non-function will throw an error.