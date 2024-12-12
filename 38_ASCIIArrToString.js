// 38. Create a function that will convert an array containing ASCII codes in a string


function stringToAsciiArr(str){
    let asciiArray = [];
    for(let i=0; i < str.length;i++){
        asciiArray.push(str.charCodeAt(i));
    }
    return asciiArray;
}

let text = "Example";
// console.log(stringToAsciiArr(text));


function asciiArrayToString(asciiArray){
    let str = "";
    for(let i=0 ; i< asciiArray.length; i++){
        str += String.fromCharCode(asciiArray[i]);
    }
    return str;
}

let asciiArray = [101, 120, 97, 109, 112, 108, 101];
console.log(asciiArrayToString(asciiArray));


//alternative

function asciiArrayToString1(asciiArray) {
    return asciiArray.map(code => String.fromCharCode(code)).join('');
}

// Example Usage
let asciiArray1 = [110, 120, 97, 109, 112, 107, 101];
console.log(asciiArrayToString1(asciiArray1)); // Output: "example"
