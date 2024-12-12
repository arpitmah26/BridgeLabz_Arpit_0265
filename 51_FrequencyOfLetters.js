// 51. Find the frequency of letters inside a string. 
// Return the result as an array of arrays. Each 
// subarray has 2 elements: letter and number of 
// occurrences.


function frequencyOfLetters(str){
    const result =[]
    const frequency = {};

    for(let i =0 ;i <str.length;i++){
        const char = str[i].toLowerCase();

        //ignoring non-aplhabetical chars

        if(/[a-zA-Z]/.test(char)){
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    for(let char in frequency){
        result.push([char, frequency[char]]);
    }
    return result;
}

console.log(frequencyOfLetters("Hello World!, How are you doing? Hope to be good, "));
console.log(frequencyOfLetters("the quick brown fox jumps over the lazy dog!"));
