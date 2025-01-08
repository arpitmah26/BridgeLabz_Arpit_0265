// Prototypes
// In JavaScript, prototypes are a mechanism by which objects inherit properties and methods from other objects. Every JavaScript object has a built-in property called [[Prototype]] that points to another object, which serves as a template or prototype

// __proto__ or obj.prototype

// example of __proto

const parentObj = {
    greet: function() {
        console.log("Hello from the parent!");
    }
};

const childObj = {
    name: "Child"
};

// Setting the prototype of childObj to parentObj
childObj.__proto__ = parentObj;

childObj.greet(); 
