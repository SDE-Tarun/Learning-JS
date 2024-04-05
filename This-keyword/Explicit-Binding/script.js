function updatePersonAge(age, name, location) {
  this.age = age;
  this.name = name;
  this.location = location;
  console.log(this);
}

let person1 = {
  name: "Tarun",
  age: 25,
};

let person2 = {
  name: "Surbhi",
  age: 23,
};

// 1. APPLY() - Array mein pass krte hai

updatePersonAge.apply(person1, [45, "Shivam", "Banglore"]);

// 2. BIND() -
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);

console.log(fullName);

console.log(fullName());

// CALL() -
function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj);
