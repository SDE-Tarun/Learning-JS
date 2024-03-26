// setTimeout() -
// console.log('Wake Up');

// setTimeout(() => {
//     console.log('Food Ordered');
// }, 5000);

// console.log('Watching Movies');

// setTimeout(() => {
//     console.log('Ordered Drinks');
// }, 3000);

// console.log('Take A Bath');

// console.log('Dancing');

// setInterval() -

const id = setInterval(() => {
    console.log('Hello Tarun');
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 5000);

