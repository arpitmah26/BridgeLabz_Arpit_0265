//  ques 4 raghav
function performOperations(){
     return Promise.resolve(5)
     .then((value) => value *2)
     .then((value) => value +5)
     .then((value) => {
        console.log("final value:", value);
        return value;
     })
     .catch((error) => {
        console.error("an error occured:", error);
     });
}

performOperations();