// In JavaScript, a constructor is a special type of function used to create and initialize objects. It is commonly used in conjunction with the class keyword or with traditional function-based syntax

// 1. constructor in classes

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('Alice', 25);
  person1.greet(); // Output: Hi, my name is Alice and I'm 25 years old.
  


//  2. constructor with function-based syntax

function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  const car1 = new Car('Toyota', 'Corolla');
  console.log(car1.make); // Output: Toyota
  

//Example

class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Calls the parent class's constructor
      this.breed = breed;
    }
  }
  
  const dog1 = new Dog('Buddy', 'Golden Retriever');
  console.log(dog1.name);  // Output: Buddy
  console.log(dog1.breed); // Output: Golden Retriever
  