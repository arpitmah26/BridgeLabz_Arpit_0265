// function to reverse elements in queue.

function reverseQueue(){
    if(queue.length === 0){
        return;
    }

    let element = queue.shift();
    reverseQueue(queue);
    queue.push(element);
}


const queue  =[1,2,3,4,5];
console.log(queue);

reverseQueue(queue);
console.log(queue);
