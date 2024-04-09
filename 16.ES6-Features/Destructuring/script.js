// Destructuring

let person = {
  name: "Tarun",
  age: 23,
  height: 5,
};

let x = person.name;
console.log(x);

// Destructuring
let { name, age, height } = person;

console.log(name, age, height);

console.log("name:", name, "age:", age, "height:", height);

// Isme as a string treat nahi hoga jo value hai vo print hogi -
console.log(`name = ${name}, age = ${age}, height = ${height}`);
