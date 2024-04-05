// let obj = {
//     a: 10,
//     b: true
// }

// Object.create kya krega obj ke blueprint se ek obj1 naam ka object bana dega
//  ab mein obj1 print krunga toh mujhe emtpty dikhayega
// lekin mein obj ki properties access krskta hu kyunki obj jo hai vo obj1 ka parent hai.
// obj1.__proto == obj is true.
// agr mein obj ka bhi __proto kru toh mujhe Object.prototype milega jo ki function hai jo object ki form mein store hota hai
// lekin yeh obj1 yaha object hai.
// isliye iska prototype nhi mil rha, kyunki prototype sirf function ka hi hota hai.

// obj1 dekha toh empty, obj2 dekha toh empty, ab check kia obj1.hasOwnProperty('a'); - false lekin agr yahi mein obj.hasOwnProperty('a'); -true
// kyunki vo obj mein defined hai obj1 mein nahi but hum access kr pa rhe hai kyunki uski chaining ho rakhi hai.
//  agr apne mein nhi milega toh parent mein check krega jb tk null nahi milega.
// object.prototype kisi bhi object ke through access kr skte hai jiske andar functions likhe honge.

// ISME KYA HAI FUNCTION BANANA PAD RHA HAI PROTOTYPE KA BHI DHYAN RAKHNA PAD RHA HAI TOH BOHT HOSHPOSH HO RHA HAI ISLIYE AB ISE USE NAHI KRTE.

// let obj1 = Object.create(obj);

// TOH IS PROTOTYPE KO REDUCE KRNE KE LIYE WE USE CLASSES NOW.

// CLASS SYNTAX - isme class banake uska name Person capital hoga first letter same aise h constructor function ka naam bhi as per convention.

class Person {
  // jab bhi hum koi object create krte hai toh hamara constructor call hota hai
  constructor(name, age, isAdult) {
    this.name = name;
    this.age = age;
    this.isAdult = isAdult;
  }

  printName() {
    console.log(`Name: ${this.name}`);
  }

  // getter - get keyword lagaunga getAge function ke aage toh niche mujhe call nahi krna padega.() bina iske vo value return krdega.
  get getAge() {
    return this.age;
  }

  // setter
  set setAge(a) {
    this.age = a;
  }

  // agr mujhe age set krni ho ya use print krana ho tog mere pass hoga getter or setter function
}

let p1 = new Person("Rohit", 20, true);

console.log(p1.printName()); // Name: Rohit and undefinded aa rha hai
//  kyunki yeh mein function print kr rha hu console mein aur yeh function kch return nhi kr raha hai isliye undefined aa rha hai

// p1.printName();

// mein isko as a property ya keyword use krunga.
console.log(p1.getAge);

// console.log(p1.getAge()); //- script.js:58 Uncaught TypeError: p1.getAge is not a function

p1.setAge = 25;

console.log(p1.getAge);
