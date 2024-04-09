// Arrays - It can store any type of value inside it.
// Arrays are a special type of variable that is also mutable and can also be used to store a list of values.

const arr = [1,'Hello',2.5,true];
console.log(arr);
// Length of Array means total number of elements present in an Array
// Indexing of Array starts from 0 to (length of Array - 1)
console.log(arr.length); // 4

// Fetching each value present in an Array - 
console.log(arr[0]);  // 1
console.log(arr[1]);  // Hello
console.log(arr[2]);  // 2.5
console.log(arr[3]);  // true

console.log('BELOW IS THE FOR LOOP');

// for loop
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

console.log('BELOW IS THE FOR OF LOOP');
// for of loop
for (const item of arr) {
    console.log(item);
}

console.log('BELOW IS THE FOR IN LOOP');
// for in loop - Gives index only
for(let index in arr){
    console.log(index);
    // VALUE AT PARTICULAR INDEX
    console.log(arr[index]);
}
















