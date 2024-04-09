// IIFE's(IMMEDIATELY INOKED FUNCTION EXPRESSIONS) - Expression ke andar function ko banao aur sath sath call krdo
// () - Expression
//  ( function name(params) {

// } )
// () - function Call

(function print() {
  console.log("Hello");
})();

// () - Expression banaya
// ( () => {} ) - Expression mein arrow function banaya
// ( () => {} ) (); - Expression mein arrow function banaya aur call krdia sath mein

(() => {
  let person = {
    name: "Tarun",
    age: 25,
    marks: 90,
  };

  function updateAge(a) {
    person.age = a;
  }

  function updateMarks(m) {
    person.marks = m;
  }
})();

// Error - person is not defined as this person is inside this expression so
console.log(person);
