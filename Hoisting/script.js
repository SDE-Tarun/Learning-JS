// ALL THE VARIABLES AND FUNCTIONS ARE HOISTED ON TOP, SO THAT IF WE WANT TO USE THEM IN BETWEEN IT WILL NOT THROW ERROR.

console.log(add(2, 5));
console.log(num);

var number = 20;
console.log(number);

function add(a, b) {
  return a + b;
}

var num = 10;
// let num = 10; // throws error as let cannot be hoisted as cannot access it before initialization.
