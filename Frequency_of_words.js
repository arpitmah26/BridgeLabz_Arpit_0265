const paragraph = "This is a paragraph. This paragraph is meant to demonstrate word frequnecy using Javascript. Word frequency in text processing. This is a paragraph. This paragraph is meant to demonstrate word frequnecy using Javascript. Word frequency in text processing.";

//split the paragraph into words and normalize case

const words = paragraph
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)

    // use reduce to calculate word frequencies
const wordFrequency = words.reduce((frequency, word) => {
    frequency[word] = (frequency[word] || 0) +1;
    return frequency;
}, {});

console.log("Word Frequencies:");
console.log(wordFrequency);

