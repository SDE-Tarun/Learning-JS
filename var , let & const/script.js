// VAR, LET AND CONST

// var - Kahi ka declared variable kahi bhi jake change kar skte hai hum.
// 1. Globally scoped means we can change this var from anywhere in our code.
// 2. Can be updated and redeclared within its scope.
// 3. Redeclared and reinitialized
// 4. var - initialized with undefined 
var a = 10;
var a = 5;
var b = 'Tarun';
var c = null;
var d = undefined;
{
   var b = 'this'; 
   console.log(b);  // b = this, global scope hai isliye change krdia is block scope mein var ko
}
console.log(b); // b = this, global scope hai isliye change krdia is block scope mein var ko

// let - jis block mein banaya hai usi block tak use kr skte hai usko hum.
// 1. Block scope
// Can be updated but not redeclared.
// let - cannnot initialized with undefined 
var a = 10;
let b = 'Tarun';
// let b = 4;
var c = null;
var d = undefined;
{
   let b = 'this'; 
   console.log(b); // b = this, block scope hai isliye yahi tak rahega value iska.
}
console.log(b); // b = Tarun

// const - it is a identifier which cannot be updated and redeclared
// const - cannnot initialized with undefined 
var a = 10;
var a = 5;
const b = 'Tarun';
// const b; // baad mein initialize nahi kr skte.
// let b = 5; // error - identifier b has been already declared.
b = 5; // error - Assignment to constant variable.
var c = null;
var d = undefined;



















