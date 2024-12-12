// 37. Create a function that will convert a string in an array containing the ASCII codes of each character


function stringToAsciiArr(str){
    let asciiArray = [];
    for(let i=0; i < str.length;i++){
        asciiArray.push(str.charCodeAt(i));
    }
    return asciiArray;
}

let text = "Example";
console.log(stringToAsciiArr(text));


//alternative

function stringToAsciiArr1(str){
    return [...str].map(char =>  char.charCodeAt(0));
}


let text1 = "Historical";
console.log(stringToAsciiArr1(text1));