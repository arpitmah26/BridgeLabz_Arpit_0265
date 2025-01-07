// Optional chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested object properties or call functions without having to explicitly check if intermediate properties exist. If any part of the chain is null or undefined, it short-circuits and returns undefined without throwing an erro

// syntax:

// obj?.prop        // Accessing a property
// obj?.[expr]      // Accessing a property with a dynamic key
// obj?.method()    // Calling a method


// Examples
// 1. accessing nested properties
const user = {
    name: 'Alice',
    address: {
      city: 'New York',
    },
  };
  
  console.log(user?.address?.city); // Output: New York
  console.log(user?.contact?.phone); // Output: undefined


// 2. calling methods safely
  
const obj = {
    greet() {
      return 'Hello!';
    },
  };
  
  console.log(obj?.greet()); // Output: Hello!
  console.log(obj?.sayBye?.()); // Output: undefined (no error)
  

// 3. accessing properties wiht dynamic keys
const user = {
    name: 'Bob',
    details: {
      age: 30,
    },
  };
  
  const key = 'details';
  console.log(user?.[key]?.age); // Output: 30
  console.log(user?.[key]?.height); // Output: undefined
  
// 4 chaining with arrays
const data = {
    users: [
      { name: 'Alice' },
      { name: 'Bob' },
    ],
  };
  
  console.log(data?.users?.[1]?.name); // Output: Bob
  console.log(data?.users?.[10]?.name); // Output: undefined
  