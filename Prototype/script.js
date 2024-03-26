// student1 = {
//     name: 'ABC',
//     age: 23,
//     isAdult: true
// }

// student2 = {
//     name: 'DEF',
//     age: 21,
//     isAdult: true
// }

// student3 = {
//     name: 'GHI',
//     age: 17,
//     isAdult: false
// }

// student4 = {
//     name: 'JKL',
//     age: 26,
//     isAdult: false
// }

function student(name, age, isAdult) {
    this.name = name;
    this.age = age;
    this.isAdult = isAdult;
    // Yeh har object mein milega kyunki iski copy ban rhi hai mere har object ke andar jab bhi object ko call kr raha hu.
    // aur class mein uska reference use krlete hai toh copy nahi banti.
    // this.details = function() {
    //     console.log(`Hi! My name is ${this.name} and my age is ${this.age}`);
    // }

    // Types of Function- Number, String, Object, Function, Array
    // Ab agr koi bhi function banta hai jese student bana tha toh uska prototype bhi banta hai, toh mujhe milega constructor ,
    // toh agr fr student pe jana hai toh mein krunga student.prototype.constructor
    // details function mene dala tha constructor mein.
 
}

// toh mein details function is student function se hataunga aur likhunga yaha student.prototype.details naam se ek object banjayega
//  jisme mein yeh function daal dunga -
// ab na yeh student function ke paas hai naa yeh in objects ke paas hai ab yeh student.prototype ke paas hai ek h baar memory milegi
// student.prototype ke pass milega details function 
// ab s1.details() function call krunga toh mil jayega vo function.
student.prototype.details = function() {
        console.log(`Hi! My name is ${this.name} and my age is ${this.age}`);
    }

let s1 = new student('Rajat', 20, true);

let s2 = new student('Salman', 24, true);

let s3 = new student('Radha', 16, false);

console.log(s1);

console.log(s2);

console.log(s3);


