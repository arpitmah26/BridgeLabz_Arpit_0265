//  In  JavaScript, most objects have a __proto__ property that points to their prototype. However, it is possible to create objects without a prototype by using Object.create(null)
// helps in avoiding prototype pollution.

//  we can create an object without using prototype by using Object.create(null)
// Example

const obj = Object.create(null);
console.log(obj);
console.log(Object.getPrototypeOf(obj));

// Methods like .toString(), .hasOwnProperty(), and .valueOf() are not available
// if we want  To check for a property, use Object.prototype.hasOwnProperty.call instea

// Example
const dict = Object.create(null);
dict.foo = "bar";
dict.baz = 42;

console.log(dict.foo); 
console.log(dict.toString);

// Example

const dict1 = Object.create(null);
dict["toString"] = "custom";
console.log(dict1["toString"]);

// Limitation example

const dict2 = Object.create(null);
dict.key  =" value";

// console.log(dict.hasOwnProperty("key"));
console.log(Object.prototype.hasOwnProperty.call(dict, "key"));


// comparsion with normal objects
// Normal object
const normalObj = {};
console.log(normalObj.toString()); // "[object Object]"

// Prototype-less object
const noProtoObj = Object.create(null);
console.log(noProtoObj.toString); // undefined



const dictionary = Object.create(null);

dictionary.apple = 3;
dictionary.orange = 5

console.log(dictionary.apple);
console.log(dictionary.orange);


// iterating over dict
for(const key in dictionary){
    console.log(key, dictionary[key]);
    
}

