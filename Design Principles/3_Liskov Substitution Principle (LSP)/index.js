// 3. Liskov Substitution Principle (LSP)
// Subtypes should be substitutable for their base types.


// BAD: Derived class breaks the behavior of the base class
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle {
    constructor(side) {
      super(side, side);
    }
  }
  
  const rectangle = new Rectangle(10, 5);
  console.log(rectangle.area()); 
  
  const square = new Square(5);
  console.log(square.area()); 
  
  // Solution with LSP: Use separate classes
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Square {
    constructor(side) {
      this.side = side;
    }
  
    area() {
      return this.side * this.side;
    }
  }
  
  const rectangle2 = new Rectangle(10, 5);
  console.log(rectangle2.area()); 
  
  const square2 = new Square(5);
  console.log(square2.area()); 
  