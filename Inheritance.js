// Inheritance
// Inheritance in JavaScript allows one class to inherit properties and methods from another class. This is a fundamental concept in object-oriented programming that promotes code reuse and organization.

// using  classes and extends

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Creating an instance of Dog
let dog = new Dog("Rex", "German Shepherd");
dog.speak(); // Output: Rex barks.


// using prototypes

// Parent constructor function
function Animal(name) {
    this.name = name;
}

// Adding a method to the Animal prototype
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a noise.');
};

// Child constructor function
function Dog(name) {
    Animal.call(this, name); // Call the parent constructor
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a method to the Dog prototype
Dog.prototype.speak = function() {
    console.log(this.name + ' barks.');
};

// Creating an instance of Dog
let dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.
