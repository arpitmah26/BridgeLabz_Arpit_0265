// Implement a Stack Using Queues
// Implement a stack using two queues. The basic operations (push, pop, top, empty) should be supported.



class Stack{
    constructor(){
        this.queue1 = [];
        this.queue2 =[];
    }


    push(x){
        this.queue1.push(x);
    }


    pop(){
        while(this.queue1.length >1) {
            this.queue2.push(this.queue1.shift());
        }

        const topElement = this.queue1.shift();

        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return topElement;
    }

    top() {
        while (this.queue1.length > 1) {
          this.queue2.push(this.queue1.shift());
        }
    
        const topElement = this.queue1.shift();
        this.queue2.push(topElement); 
    
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    
        return topElement;
    }
    
    empty() {
        return this.queue1.length === 0;
    }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top());    
console.log(stack.pop());    
console.log(stack.top());   
console.log(stack.empty());  