// Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

// Instead of calling a function with all its arguments at once, you call a series of functions, each supplying one argument


// syntax for currrying

function curryExample(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}

console.log(curryExample(1)(2)(3));


// example 1

function multiply(a){
    return function(b){
        return a*b;
    };
}

let double = multiply(2);
console.log(double(5));
console.log(double(10));


// example 2 using arrow function for currying

const curriedFunc = a => b => c => d => a+b+c+d;
console.log(curriedFunc(1)(0)(2)(3));

// example 3

function logger(level){
    return function(message){
        console[level](message);
    };
}

const info = logger('info');
const error =  logger('error');

info('This is an info message');
error('This is an error message');