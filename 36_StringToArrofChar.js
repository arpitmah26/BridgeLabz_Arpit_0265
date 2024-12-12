// 36. Create a function that converts a string to an array of characters

function stringToArray(text){
    return text.split('');
}

let text = "Example";
console.log(stringToArray(text));


//alternative

function stringToArr(str){
    let charArray = [];
    // let word =0;
    for(let i=0 ; i<str.length; i++){
        charArray.push(str[i]);
    }
    return charArray;
}

let text1 = "sample";
console.log(stringToArr(text1));
