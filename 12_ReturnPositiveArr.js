// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers


function getPositiveNumbers(numbers){
    return numbers.filter(num => num >0) ;
}

console.log(getPositiveNumbers([-1,-2,0,2,3,5,6,,123,-33,43]));


// alternative

function getPosNum(numbers){
    let posNum = [];
    for(let i=0; i < numbers.length; i++){
        if (numbers[i] > 0){
            posNum.push(numbers[i]);
        }
    }
    return posNum;
}

console.log(getPosNum([-12,-4,54,5,4,3,0]));
