//SET ---> A Set is a collection of unique values where each value can occur only once. A Set can store any type of value (primitives or objects).

/*
Key Features of Set
No duplicate values: Automatically prevents duplicates.
Order of elements: Maintains the order of insertion.
Iterability: A Set is iterable, so you can loop through its elements.
Set Methods
add(value): Adds a new value to the set.
has(value): Checks if a value exists in the set.
delete(value): Removes a value from the set.
clear(): Removes all values from the set.
size: Returns the number of elements in the set.
*/

// const set = new Set();

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(2);

// console.log(set);

// console.log(set.has(2));
// console.log(set.has(5));


// //removing a value
// set.delete(2);
// console.log(set.has(2));

// set.forEach((value) => console.log(value));

// using for..of
// for(const value of set){
//     console.log(value);
    
// }

// console.log(set.size);

// 1. Removing duplicated from an array
// const numbers = [1, 2, 3, 1, 2, 4];
// const uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers); // [1, 2, 3, 4]

// 2.Tracking Unique Elements

// const seen = new Set();
// seen.add('Alice');
// seen.add('Bob');
// console.log(seen.has('Alice')); // true



//WeakSet --> A WeakSet is a collection of objects only. It is called "weak" because it holds weak references to its objects, meaning they can be garbage collected if no other references to them exist.

/*
Key Features of WeakSet
Only objects: Values must be objects; primitives are not allowed.
No duplicates: Like a Set, values are unique.
No size or iteration: You cannot determine the size or iterate through a WeakSet.
Garbage collection: If no references to an object exist, it will be removed from the WeakSet.
WeakSet Methods
add(value): Adds an object to the WeakSet.
has(value): Checks if an object exists in the WeakSet.
delete(value): Removes an object from the WeakSet.
*/


const weakSet = new WeakSet();

const obj1 = {name: 'Arpit'};
const obj2 = {name: 'Arman'};


weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));


weakSet.delete(obj2);

console.log(weakSet.has(obj2));

weakSet.add({name: 'temporary'});


/*
When to Use Set vs WeakSet
Use Set When:
You need to store unique values (primitives or objects).
You require iteration or access to the collection’s size.
You want to work with a fixed set of elements.
Use WeakSet When:
You want to store objects without preventing their garbage collection.
You need to track objects indirectly or implement private data.
Iteration or size isn’t needed.




















*/