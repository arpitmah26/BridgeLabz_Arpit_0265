// 32. Create a function that will capitalize the first letter of each word in a text

function capitalizWord(text){
    return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

let text = "this is a sample example which we need to capitalize.";
console.log(capitalizWord(text));
