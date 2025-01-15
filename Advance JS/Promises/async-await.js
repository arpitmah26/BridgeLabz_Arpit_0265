// async function arpit(){


// let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("21 Deg");
//     }, 1000)
// })

// let gspWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("18 Deg");
//     }, 5000)
// })

// delhiWeather.then(console.log);
// gspWeather.then(console.log); 
// let delhiW = await delhiWeather
// let gspW = await gspWeather
// return[delhiW, gspW]

// }

// console.log("welcome to weather control room");

// let a = arpit()
// a.then((value)=> {
//     console.log(value)
// })


// example

async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/invalid-endpoint');
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch failed:', error.message);
    }
}
fetchData();

