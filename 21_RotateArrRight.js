// Rotate an array to the right by 1 position

function rotateRight(arr){
    if(arr.length === 0) return arr;
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}
console.log(rotateRight([1,2,3,4,5]));
