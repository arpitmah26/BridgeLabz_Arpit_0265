// 33. Calculate the sum of numbers received in a comma delimited string


function sumOfNum(nums){
    return  nums
    .split(',')
    .reduce((sum,num)  => sum + parseFloat(num.trim()), 0);
}

let numString = "1.5, 1.3, 1.2, .34, 3.4";
console.log(sumOfNum(numString));
