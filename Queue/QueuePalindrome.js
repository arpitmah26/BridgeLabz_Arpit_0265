// Check if a Queue is Palindrome

function isQueuePalindrome(queue){
    let stack =[];
    let len = queue.length;

    //push all element to stack
    for(let  i=0; i< len; i++){
        stack.push(queue[i]);
    }

    //check if palindrome?
    for(let i=0; i<len; i++){
        if(queue[i] !== stack.pop()){
            return false;
        }
    }

    return true;
}

const queue = [1,2,3,2,1];
console.log(queue);

console.log(isQueuePalindrome(queue));

