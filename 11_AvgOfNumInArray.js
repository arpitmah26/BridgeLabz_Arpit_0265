// 11. Calculate the average of the numbers in an array of numbers

function sumArray(numbers){
    let sum =0;
    for(let num of numbers){
        sum += num;
    }
    return sum;

}

function averageArray(numbers) {
    if (numbers.length === 0) return 0; // Avoid division by zero
    let sum = sumArray(numbers);
    return sum / numbers.length;
  }
  console.log(averageArray([1,2,3,4,5]));