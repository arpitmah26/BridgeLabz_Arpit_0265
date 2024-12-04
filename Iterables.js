/*
In JavaScript, iterables are objects that can be iterated over using a loop, such as a for...of loop. An object is considered iterable if it implements the [Symbol.iterator] method, which returns an iterator.

Key Concepts:
Iterable Protocol:

An object is iterable if it has a method keyed by the special symbol Symbol.iterator.
This method must return an iterator object.
Iterator Protocol:

An iterator is an object with a method called next().
The next() method returns an object with two properties:
value: The next value in the iteration.
done: A boolean indicating if the iteration is complete.
Examples of Iterables:
Many built-in objects in JavaScript are iterable, such as:

Arrays: [1, 2, 3]
Strings: "hello"
Maps: new Map([['key1', 'value1'], ['key2', 'value2']])
Sets: new Set([1, 2, 3])
Typed Arrays: new Uint8Array([1, 2, 3])
Arguments Object: function(args) { console.log(arguments); }

*/


// const array = [1, 2, 3];
// const iteration = array[Symbol.iterator]();

// console.log(iteration.next()); // { value: 1, done: false }
// console.log(iteration.next()); // { value: 2, done: false }
// console.log(iteration.next()); // { value: 3, done: false }
// console.log(iteration.next()); // { value: undefined, done: true }


// const array22 = [1,2,3];
// const iterations = array22[Symbol.iterator]();

// array[Symbol.iterator](): Creates an iterator for the array.
// iterator.next(): Moves to the next element in the iteration

//custom iterable example:

const myIterable = {
    *[Symbol.iterator](){
        yield "first";
        yield "second";
        yield "third";
    }
};

for(const value of myIterable){
    console.log(value);
}

// Non-Iterable Example:
// Objects by default are not iterable:

// const obj = { a: 1, b: 2 };
// for (const item of obj) {
//   // TypeError: obj is not iterable
// }

/*
Summary:
Iterables are objects that implement the Symbol.iterator method.
Examples of iterables include arrays, strings, maps, and sets.
Iterators are objects returned by calling [Symbol.iterator] on an iterable and provide the next() method to traverse values.
for...of loops are the most common way to work with iterables.
*/

//Methods to use an Iterator:
//1. for..of loop

//2. using the iterator object directly

//3.Srpead operator(...)

//4. Array.from()

//5.Destructuring Assigment.

//6.Promise.all() and Promise.race()

//7. custom iteration in functions.