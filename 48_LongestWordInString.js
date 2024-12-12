// 48. Create a function to return the longest word in a string

// function findLongestWord(text){
//     const words = text.split(" ").filter(word => word !== "");
//     let longestWord = "";
//     for(let i=0; words.length; i++){
//         if(words[i].length  > longestWord.length){
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));


function findLongestWord(text) {
    const words = text.split(" "); 
  // const words = text.replace(/[^a-zA-Z\s]/g, "").split(" "); // Remove punctuation

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}


console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("JavaScript is fun")); // Output: "JavaScript"
