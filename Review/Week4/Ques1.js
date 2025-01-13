// ques 2 vivek

class KhudkiClass extends Error{
    constructor(message){
        super(message);
        this.name = "KhudkiClass";
    }


    //toString() method
    toString(){
        return `${this.name}: ${this.message}`;
    }
}

const error = new KhudkiClass("Something went wrong!");
console.log(error.toString());