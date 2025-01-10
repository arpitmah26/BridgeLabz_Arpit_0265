// Getters and Setters

// Getters
//  a getter is a method that allows you to retreive a property value from an object. when you access a property that has a getter defined, tthe getter method is invoked automatically.

// syntax for getter:

// get propertyName(){
//     return this._property;

// }

//example

const person = {
    firstName: "Arpit",
    lastName: "Mahajan",

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
};


console.log(person.fullName);


// Setters ->  it is a method that allows you to set the value of a property. When you assign a value to a properry that has a setter defined, the setter method is invoked automatically, and you can use it to control how the value is set.

// syntax

// set propertyName(value){
    // this._property = value;
// }

// Example

const person1 ={
    firstName:"Arpit",
    lastName: "Mahajan",

    set fullName(name) {
        const[first, last] = name.split(' ');
        this.firstName = first;
        this.lastName = last;
    }
};

person1.fullName = "Arman Singh";
console.log(person1.firstName);
console.log(person1.lastName);
// console.log(fullName);


// Combine example of getters and setters

// Rectangle Class

class Rectangle{
    constructor(width, height){
        this.width =width;
        this.height =height;
    }

    //getter for area
    get area(){
        return this.width * this.height;
    }

    //setter for area
    set area(value){
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }

}

let rectangle = new Rectangle(4,5);

// using the getter 
console.log(rectangle.area);

// using setter
rectangle.area = 36;
console.log(rectangle.width);
console.log(rectangle.height);


//  Example 2
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter for fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter for fullName
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Creating an instance of Person
let person2 = new Person("John", "Doe");

// Using the getter
console.log(person1.fullName); // Output: John Doe

// Using the setter
person2.fullName = "Jane Smith";
console.log(person2.firstName); // Output: Jane
console.log(person2.lastName); // Output: Smith

