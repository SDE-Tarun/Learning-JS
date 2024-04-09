let arr1 = ['Tarun', true, 5.6, 7];

let arr2 = ['Bhaskar', false, 7.6, 8];

let arr3 = ['Shivam', true, 3.6, 4];

let arr4 = ['Abhijeet', true, 8.9, 2];

// Similar to concat but it uses ... operator -
let arr5 = [...arr1, ...arr2, ...arr4];

console.log(arr5);