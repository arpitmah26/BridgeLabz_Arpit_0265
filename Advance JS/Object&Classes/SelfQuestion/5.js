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

