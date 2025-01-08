// Object to Primitive Conversion in js
// In JavaScript, when an object is used in a context where a primitive value is expected (e.g., in arithmetic operations, comparisons, or string concatenation), the object is automatically converted to a primitive value.

//  Example 1 StringConversion

const obj = {
    toString(){
        return "I am an object";
    }
};

console.log(String(obj));
console.log(obj + " is cool");


// Example 2 NumberConversion

const obj1 = {
    valueOf(){
        return 42;
    }
};

console.log(Number(obj1));
console.log(obj1 +8);

// using Symbol.toPrimitive

const obj3 = {
    [Symbol.toPrimitive](hint){
        if(hint  === "string"){
            return "Custom string";
        }else{
            return 100;
        }
    }
};

console.log(String(obj3));
console.log(obj3 + 50);
console.log(obj3);
