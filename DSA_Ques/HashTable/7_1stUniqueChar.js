//  7) First Unique Character in a String
// Given a string, find the first non-repeating character.


function firstUniqChar(s) {
    const hashTable = {};
  
    for (const char of s) {
      hashTable[char] = (hashTable[char] || 0) + 1;
    }
  
    for (let i = 0; i < s.length; i++) {
      if (hashTable[s[i]] === 1) {
        return i;
      }
    }
  
    return -1;
  }
  
  console.log(firstUniqChar("leetcode")); 
  console.log(firstUniqChar("loveleetcode"));