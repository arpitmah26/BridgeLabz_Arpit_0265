// Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
}


let string = "arpit";
console.log(reverseString(string));


//using simple function

function reversedString(str){
    let reversed= '';
    for(let i = str.length -1; i>= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

let string2  = "Hello World!";
console.log(reversedString(string2));
