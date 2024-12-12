// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number


function extractColumn(matrix, columnIndex){
    let result =[];
    for(let  i=0 ;i< matrix.length;i++){
        if(matrix[i] && matrix[i][columnIndex] !== undefined){
            result.push(matrix[i][columnIndex]);
        }

    }
    return result;
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(extractColumn(matrix, 5));



//alternative

function extractColumn1(matrix, columnIndex){
    return matrix.map(row => row[columnIndex]).filter(value => value !== undefined);
}

let matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(extractColumn1(matrix1, 1));