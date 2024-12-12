// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting


function calDistance(x1,x2, y1,y2){
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx*dx +  dy*dy); 
}


function areCirclesIntersecting(x1,y1, r1, x2, y2, r2){
    const distance = calDistance(x1,x2,y1,y2);
    return distance <= r1 + r2;
}

let result = areCirclesIntersecting(0,0,5,7,0,3);
console.log(result);

 