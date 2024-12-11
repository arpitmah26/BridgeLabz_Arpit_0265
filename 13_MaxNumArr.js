// 13. Find the maximum number in an array of numbers


function findMax(number){
    return Math.max(...number)

}
console.log(findMax([1,2,3,4,5,6,4,3,2,200,3,33,44,100]));


//  alternative

function findMaxx(numbers){
    let max = numbers[0];
    for(let i=0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;

}

console.log(findMaxx([44,5,4,3,455]));
