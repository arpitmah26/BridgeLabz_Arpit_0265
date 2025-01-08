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



