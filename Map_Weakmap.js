//MAP  ---> A Map is a collection of key-value pairs where both keys and values can be any data type (primitive or object).

// Map Methods
// set(key, value): Adds a key-value pair.
// get(key): Retrieves the value associated with a key.
// has(key): Checks if a key exists in the map.
// delete(key): Removes a key-value pair.
// clear(): Removes all key-value pairs.
// size: Returns the number of key-value pairs.



// const map = new Map();

// map.set('name', 'Arpit');
// map.set(42, 'The answer');

// map.set({id:1}, 'Object Key');

// console.log(map.get('name'));
// console.log(map.get(42));

// map.forEach((value,key) => {
//     console.log(key, value);
// });

// console.log(map.size);



// WeakMap  -- > A WeakMap is a collection of key-value pairs where keys must be objects and values can be arbitrary values. The "weak" in WeakMap refers to the fact that it does not prevent garbage collection of keys.

// WeakMap Methods
// set(key, value): Adds a key-value pair.
// get(key): Retrieves the value associated with a key.
// has(key): Checks if a key exists in the WeakMap.
// delete(key): Removes a key-value pair.


// // Creating a WeakMap
// const weakMap = new WeakMap();

// // Creating objects to use as keys
// const obj1 = { id: 1 };
// const obj2 = { id: 2 };

// // Adding key-value pairs
// weakMap.set(obj1, 'Arpit');
// weakMap.set(obj2, 'Arman');

// // Retrieving values
// console.log(weakMap.get(obj1)); // Alice

// // Checking for keys
// console.log(weakMap.has(obj2)); // true

// Removing a key-value pair
// weakMap.delete(obj1);
// console.log(weakMap.has(obj1)); // false






// Differences Between Map and WeakMap
// Feature	Map	WeakMap
// Key Types	Any type (string, number, object, etc.)	Only objects (no primitives allowed)
// Iteration	Iterable (can use for...of, .keys(), etc.)	Not iterable; no way to access all entries
// Garbage Collection	No automatic garbage collection	Keys are weakly held; entries are removed if the key is garbage collected
// Size Property	size gives the number of entries	No size property
// Use Case	General-purpose key-value storage	Memory-sensitive cases (e.g., caching objects)



// When to Use Map vs. WeakMap
// Use Map When:
// You need key-value storage with any key type.
// You require iteration over all entries.
// You want to store a fixed set of key-value pairs.
// Use WeakMap When:
// Keys are objects, and you don’t want them to prevent garbage collection.
// You’re implementing private data or weak references in your code.
// Iteration or size isn’t required.


const privateData = new WeakMap();

class Person {
    constructor(name) {
        privateData.set(this, {name});
    }

    getName(){
        return privateData.get(this).name;
    }
}

const arpit = new Person("Arpit");
console.log(arpit.getName());

