// Implementation of HashTable


class HashTable{
    constructor(size  = 50){
        this.table = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let char of key){
            hash += char.charCodeAt(0);
        }
        return hash % this.table.length;
    }

    //insert key-value pair
    set(key, value){
        const index = this._hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        this.table[index].push([key,value]);
    }

    //retrieve value
    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let [k, v] of bucket) {
                if (k === key) {
                    return v;
                }
            }
        }
        return undefined;
    }

    //Remove key-value pair
    remove(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            this.table[index] = bucket.filter(([k]) => k !== key);
            return true;
        }
        return false; 
    }
    
    //display
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, ":", this.table[i]);
            }
        }
    }
    
    

}


const hashTable = new HashTable();

hashTable.set('name', 'Arpit');
hashTable.set('city', 'gsp');
hashTable.set('age', 21);
console.log(hashTable.get('name'));
console.log(hashTable.get('age'));
hashTable.display();
// hashTable.remove('city');
console.log(hashTable.get('city'));

