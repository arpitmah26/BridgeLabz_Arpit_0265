// 34. Create a function that returns an array with words inside a text.


function getWords(text){
    return text.match(/\b\w+\b/g) || [];
}

let text = "Hello World!, how are you?";
console.log(getWords(text));


//alternative


function getWord(text) {
    return text
        .split(' ') 
        .filter(word => word.match(/[a-zA-Z0-9]/)); 
}


function NumberToString(word){

    var a=word.split(" ");
    console.log(a);
    
    return word;
}
let word= "I Am a Student Of Bridge lab";
console.log(NumberToString(word));

// Example Usage
let text1 = "This is a simple, example text!";
console.log(getWord(text1)); 
