// /40. Implement the bubble sort algorithm for an array of numbers

let arr=[1,3,7,2,9,2,6,4,5]
console.log(arr);
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr.length-i-1;j++)
    {
        if(arr[j]>arr[j+1])
        {
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}

console.log(arr);