// 1. combining Optional Chaining, Object Methods, and Property Descriptors

class Library{
    constructor(name){
        this.name = name;
        this.books =[];

    }

    addBook(book){
        this.books.push(book);
    }


    findBookByTitle(title){
        return this.books.find(book => book?.title === title);
    }
}

let library = new  Library("City Library");

Object.defineProperty(library, 'name', {
    writable:false
});

library.addBook({title: "Gullivers Travels", author: "Jonathan Swift"});
library.addBook({title: "Half Girlfriend", author: "Chetan Bhagat"});

let book = library.findBookByTitle("Half Girlfriend");
console.log(book);

library.name = "New Library";
console.log(library.name);



// 2. object to primitive conversion and constructor
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }


    [Symbol.toPrimitive](hint){
        if(hint === "string"){
            return this.name;
        }
        return this.price;
    }
}

let product1 = new Product("Laptop", 1500);
let product2 = new Product("Smartphone", 800);


console.log(product1 + 100);
console.log(`the price of the ${product2} is $${product2.price}`);


// 3. objects, classes and constructors

class Animal{
    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    displayDetails(){
        console.log(`Animal: ${this.name}, Species: ${this.species}`);
    }
}

class Zoo{
    constructor(){
        this.animals =[];

    }

    addAnimal(animal){
        this.animals.push(animal);
    }

    displayAllAnimals(){
        this.animals.forEach(animal => animal.displayDetails());
    }
}

let animal1 = new Animal("Lion", "Panthera leo"); 
let animal2 = new Animal("Elephant", "Loxodonta");
let animal3= new Animal("Snake", "Reptilia");

let zoo = new Zoo();

zoo.addAnimal(animal1);
zoo.addAnimal(animal2);
zoo.addAnimal(animal3);

zoo.displayAllAnimals();

//optional chaining

let employee ={
    name: "Hardy",
    dept:{
        name: "QA",
        manager:{
            name: "Sifti"
        }
    }
};

let managerName = employee.dept?.manager?.name;
console.log(managerName);


let hrName = employee.dept?.manager?.team?.position?.name;
console.log(hrName);


// Garbage Collection

let car = {
    brand: "Toyota",
    model: "Corolla"
};

car = null;

// Object methods and "this"

let user ={
    name: "arpit",
    displayName(){
        console.log(`User: ${this.name}`);
        
    }
};

user.displayName();

