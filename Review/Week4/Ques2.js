// question 3 .function that  runs multiple promises. sandeep

function runPromisesConcurrently(promises){
    return Promise.all(promises)
    .then(results => {
        console.log("All promises:", results);
        return results;
    })
    .catch(error => {
        console.error("one or more promises failed:", error);
        throw error;
    });
}

const promise1 = new  Promise((resolve) => setTimeout(resolve, 1000, 'Result 1'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Result 2'));
const promise3 = new  Promise((resolve) => setTimeout(resolve, 1500, 'result 3'));

runPromisesConcurrently([promise1, promise2, promise3])
.then(results => {
    console.log("results after all promise:", results);
})
.catch(error => {
    console.error("error handling promise:", error);
});