
// ques 1 arpit

class Object{
    constructor(value){
        this.value = value;
    }


    valueOf(){
        console.log('valueOf called');
        return this.value;
        
    }

    toString(){
        console.log('toString called');
        return `Object with value: ${this.value}`;
        
    }
}

const obj = new Object(42);

console.log(('Result of adding 10 to obj:', obj +10));

console.log('String of obj', String(obj));

console.log('String', 'hello', + obj)