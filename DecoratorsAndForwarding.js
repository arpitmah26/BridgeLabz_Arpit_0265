/*
Decorators in JavaScript
A decorator is a special kind of function used to modify or enhance the behavior of a class, method, or property. They are part of JavaScript’s meta-programming capabilities and were introduced as an experimental feature in ES2016. Decorators are commonly used in frameworks like Angular.

syntax
A decorator is applied using the @ symbol before a class, method, or property
@decoratorFunction
class MyClass {
    @decoratorFunction
    myMethod() {
        console.log("Original method");
    }
}

*/

//1. class decorators: modifies the behaviour of class
function logClass(target) {
    console.log(`Class name: ${target.name}`);
}

@logClass
class Example {}
// Output: Class name: Example


//2. method decorators: modifies or enhances the behaviour of a class method.
function logMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with arguments: ${args}`);
        return originalMethod.apply(this, args);
    };
}

class Example {
    @logMethod
    greet(name) {
        return `Hello, ${name}`;
    }
}

const obj = new Example();
console.log(obj.greet('Alice'));
// Logs: Calling greet with arguments: Alice
// Output: Hello, Alice


// Property Decorators: Modify or add additional logic to a class property.
function logProperty(target, propertyKey) {
    let value = target[propertyKey];

    const getter = () => {
        console.log(`Getting value of ${propertyKey}: ${value}`);
        return value;
    };

    const setter = (newValue) => {
        console.log(`Setting value of ${propertyKey} to: ${newValue}`);
        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
    });
}

class Example {
    @logProperty
    name = '';
}

const obj = new Example();
obj.name = 'Alice'; // Logs: Setting value of name to: Alice
console.log(obj.name); // Logs: Getting value of name: Alice





/* -------------------------- FORWARDING---------------*/

Forwarding in JavaScript
// Forwarding is a design pattern where a function or method passes control to another function or object, delegating some or all of its tasks. Forwarding is often used to extend or modify functionality.


//example
function originalFunction(message) {
    console.log(`Original function: ${message}`);
}

function wrapperFunction(...args) {
    console.log("Wrapper adds functionality.");
    originalFunction(...args); // Forwarding call
}

wrapperFunction("Hello!");
// Output:
// Wrapper adds functionality.
// Original function: Hello!
