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
