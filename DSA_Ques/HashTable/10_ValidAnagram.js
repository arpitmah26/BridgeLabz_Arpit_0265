// 10) Valid Anagram
// Given two strings, determine if one is an anagram of the other.

function isAnagram(s, t) {
    if (s.length !== t.length) 
      return false;
  
    const hashTable = {};
  
    for (const char of s) {
      hashTable[char] = (hashTable[char] || 0) + 1;
    }
  
    for (const char of t) {
      if (!hashTable[char]) {
        return false;
      }
      hashTable[char]--;
    }
  
    return true;
  }
  
  console.log(isAnagram("anagram", "nagaram")); 
  console.log(isAnagram("rat", "car"));