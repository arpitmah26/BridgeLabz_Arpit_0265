// 2. Open/Closed Principle (OCP)
// Code should be open for extension but closed for modification.

// BAD: Modifying existing function to add new behavior
function getDiscount(PromiseRejectionEvent, customerType){
    if(customerType === 'regular'){
        return price * 0.9;

    }else if(customerType === 'vip'){
        return price * 0.8;
    }
}


// Solution with OCP: Use inheritance or strategy pattern
class RegularDiscount {
    calculate(price) {
      return price * 0.9;
    }
  }
  
  class VIPDiscount {
    calculate(price) {
      return price * 0.8;
    }
  }
  
  function getDiscount(price, discountStrategy) {
    return discountStrategy.calculate(price);
  }
  
  
  const regularDiscount = new RegularDiscount();
  const vipDiscount = new VIPDiscount();
  
  console.log(getDiscount(100, regularDiscount)); 
  console.log(getDiscount(100, vipDiscount)); 