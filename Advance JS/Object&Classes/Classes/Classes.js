//class:it is a bueprint for creating objects it encapsulate data and behaviour
//feture: constructor method: intialize object property , methods:function inside a class, inheritance: inherit properties from another class


class Animal{
    constructor(name,sound){
      this.name=name;
      this.sound=sound
    }
    makesound(){
      console.log(`${this.name} says ${this.sound}`);
      
    }
  }
  
  const dog = new Animal("dog", "woof")
  dog.makesound();
  
  
  
  //inheritance
  
  class bird extends Animal{
    fly(){
    console.log(`${this.name} is flying`);
    }
  }
  
  const parrot=new bird("parrot", "chrip")
  parrot.makesound()
  parrot.fly()