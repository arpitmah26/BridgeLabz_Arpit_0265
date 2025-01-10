

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