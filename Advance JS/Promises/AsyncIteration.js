// Async iteration in JavaScript is a way to work with data streams or sequences where elements may not be immediately available, such as fetching data from an API or reading files

// syntax for async iteration


// for await(let item of asyncIterable){
//     //process each item
// }



// Example 1

async function* asyncGenerator() {
  for (let i = 1; i <= 3; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async delay
      yield i;
    }
}
  (async () => {
    for await (let value of asyncGenerator()) {
      console.log(value); // Outputs 1, 2, 3 with a 1-second delay between
    }
  })();


// example using yield

async function* yieldExample(){
  yield 1;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  yield 2;
  yield 3;
}

(async () => {
  for await(let value of yieldExample()) {
    console.log(value);
    
  }
})();

// example using next()


async function* nextExample(){
  yield 1;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  yield 2;
  yield 3;
}

const gen = nextExample();

(async () => {
  console.log(await gen.next());
  console.log(await gen.next());
  console.log(await gen.next());
  console.log(await gen.next());

} ) ();