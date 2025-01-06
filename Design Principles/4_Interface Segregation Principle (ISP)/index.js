// 4. Interface Segregation Principle (ISP)
// A class should not be forced to implement interfaces it doesn't use.


// BAD: Forcing classes to implement unnecessary methods
// class Animal {
//     eat() {}
//     fly() {} 
//   }
  
//   class Dog extends Animal {
//     eat() {}
//     fly() { throw new Error("Dogs can't fly"); }
//   }
  



  // Solution with ISP: Split the interface
  class Eater {
    eat() {}
  }
  
  class Flyer {
    fly() {}
  }
  
  class Dog extends Eater {}
  class Bird extends Eater {
    fly() {}
  }
  
  const dog = new Dog();
  dog.eat();
  
  const bird = new Bird();
  bird.eat();
  bird.fly();
  