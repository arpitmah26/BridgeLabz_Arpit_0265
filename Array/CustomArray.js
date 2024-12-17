// for making custom array in js we can use several methods like:
// 1. using a class
// 2. using constructor functions
// 3. using proxy for custom array
// 4. using an object

// Example

// class customArray{
//     constructor(){
//         this.elements =[];
//     }


//     // add new element
//     add(element){
//         this.elements.push(element);
//     }

//     //custom method to get size
//     size(){
//         return this.elements.length;
//     }

//     //custom method to display elements
//     display(){
//         console.log(this.elements);
        
//     }
// }


// const myCustomArray = new customArray();
// myCustomArray.add(10);
// myCustomArray.add(20);
// console.log(myCustomArray.size());

// myCustomArray.display();


// using an object

const customArray ={
    length:0,

    push: function(value){
        this[this.length] = value;
        this.length++;
    },

    pop: function(){
        if(this.length === 0){
            return undefined;
        }

        const lastIndex = this.length -1;
        const lastElement = this[lastIndex];
        delete this[lastIndex];
        this.length--;
    },


    delete: function(index){
        if(index >= 0 && index < this.length){
            delete this[index];

        }else{
            console.log("Index out of bounds");
            
        }
    },

    //display
    display: function(){
        let result = [];
        for(let i=0; i< this.length; i++){
            result.push(this[i]);
        }
        console.log(result);
        
    }
};


customArray.push(1);
customArray.push(2);
customArray.push(3);
customArray.push(4);

customArray.display();

console.log(customArray.pop());
customArray.display();

customArray.delete(1);
console.log();
customArray.display();

customArray.delete(10);