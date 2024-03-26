// Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). 
let obj = {
    name:'Tarun',
    age: 20,
    id: 1,
    address: 'ABC'
}

console.log(obj);

console.log(obj.name);
console.log(obj.age);
console.log(obj.id);
console.log(obj.address);

for (let key in obj) {
    // console.log(key);
    console.log(obj[key]);
}

