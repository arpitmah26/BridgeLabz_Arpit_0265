// In JavaScript, property flags and descriptors define additional attributes for an object’s properties, beyond their basic value. They help control how a property behaves, such as whether it can be modified, enumerated, or configured.

// Common Flags in property desciptors
// configurable
// enumerable
// writable

// There are 2 types of descriptors:
// Data and Accessor descriptors

// Example

let obj = {};

Object.defineProperty(obj, 'name', {
    value: "Arpit",
    writable:false,
    enumerable:true,
    configurable:true
});
console.log(obj.name);

obj.name = "ARPIT";
console.log(obj.name);


