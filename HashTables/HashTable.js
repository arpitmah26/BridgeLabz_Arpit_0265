//  Hash table

//using objects

// let hashTable  ={};

// hashTable['name'] = 'Arpit';
// hashTable['age']  =25;

// console.log(hashTable['name']);

// delete hashTable['age'];

// console.log('name' in hashTable);



//using map 

let hashMap = new Map();

hashMap.set('name', 'Arpit'),
hashMap.set('age',22);

console.log(hashMap.get('name'));

hashMap.delete('age');

console.log(hashMap.has('name'));
