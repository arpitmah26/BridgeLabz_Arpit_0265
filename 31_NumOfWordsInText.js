// 31. Create a function that will return the number of words in a text.

function countWords(text){
    let count =0;
    let inWord = false;
    for(let i=0; i< text.length; i++){
        if(text[i] !== ' ' && text[i] !== '/t' && text[i] !== '*n'){
            if(!inWord){
                count++;
                inWord = true;
            }
        }else{
            inWord =false;
        }
    }
    return count;
}

let text= "This is a simple text of words example";
console.log(countWords(text));

// Alternative

function countWord(text){
    if(!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
}
let text1 = "This is a simple text example";

console.log(countWord(text1));
