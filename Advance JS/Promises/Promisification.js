// Promisification is the process of converting a function that uses a callback (typically for asynchronous operations) into a function that returns a promise.


// syntax
function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            } );
        });
    };
}

// Example
function getFruits(callback){
    let fruits = ['apple', 'banana','cherry']
    setTimeout(() => callback(fruits), 1000);

}

// getFruits(console.log);

// function promisify(func){
//     return function(){
//         return new Promise((resolve, reject) => {
//             try{
//                 func(resolve);
//             }catch(e){
//                 reject(e);
//             }
//         });
//     }
// }


// const promisified = promisify(getFruits);
// promisified().then(res => console.log(res));

// const fruits = await promisified();
//await keyword can be used only inside aync functions


// Example 2

function fetchData(url, callback){
    setTimeout(()=>{
        if(!url){
            callback('Error: no URL provided');
        }else{
            callback(null, {data: "Fake fata from " + url});
        }
    }, 1000);
}


fetchData('https://example.com', (err, data) => {
    if(err){
        console.log(err);
        
    }else{
        console.log(data);
        
    }
});


// Now if we promisify this

function fetchDataPromise(url){
    return new Promise((resolve, reject) => {
        fetchData(url, (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        } );
    });
}


fetchDataPromise('https://example.com')
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
});

//if we want to promisify multiple functions, it is done as:

function promisify(fn){
    return function(...args){
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if(err) {
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });
    };
}

const fetchDataPromisified = promisify(fetchData);

fetchDataPromisified('https://google.com')
.then(console.log)
.catch(console.error);