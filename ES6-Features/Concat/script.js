let arr1 = [1, 2, 3, 4, 5];

let arr2 = [6, 7, 8, 9, 10];

let arr3 = arr1.concat(arr2);

console.log(arr3);

let arr4 = arr2.concat(arr1);

console.log(arr4);

let arr5 = ["Tarun", true, 5.6, 7];

let arr6 = ["Bhaskar", false, 7.6, 8];

let arr7 = ["Shivam", true, 3.6, 4];

let arr8 = ["Abhijeet", true, 8.9, 2];

let arr9 = arr5.concat(arr6, arr7, arr8);

let arr10 = arr5.concat(arr7, arr6, arr8);

console.log(arr9);

console.log(arr10);
