// 41. Create a function to calculate the distance between two points defined by their x, y coordinates


function calDistance(x1, y1, x2, y2){
    const dx = x2 - x1;
    const dy = y2 -y1;
    return Math.sqrt(dx*dx + dy*dy);
}

let dist = calDistance(1,2,4,6);
console.log(dist);
