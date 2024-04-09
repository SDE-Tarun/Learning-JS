class Vehicle {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// class ke aage extends Vehicle ki is class car ka parent hai vehicle.
class Car extends Vehicle {
  constructor(name, year, seater) {
    // ab mein chahta hu yeh jo meri car class hai ise pehle meri ek class vehicle bhi toh bani chahiye
    // toh usko call krne ke liye hum constructor ke andar ek aur constructor call krte hai mtlb parent mtlb constructor(name, year)
    // { this.name = name; this.year = year;} using a keyword called super aur uske vo cheeze pass krunga jo uske parent mein pass ho rhi hongi.
    super(name, year); // - yeh apne parent ke constructor ko call krega ab isko kese pata iska parent kon hai toh batana padega.
    // aur vo batane ke liye hum likhte hai class ke aage extends Vehicle ki is class car ka parent hai vehicle.
    this.seater = seater;
  }

  printCar() {
    console.log(`Name: ${this.name}`);
    console.log(`Year: ${this.year}`);
    console.log(`Seater: ${this.seater}`);
  }
}

class ElectricVehicle extends Car {
  constructor(name, year, seater, battery) {
    super(name, year, seater);
    this.battery = battery;
  }

  printCar() {
    console.log(`Name: ${this.name}`);
    console.log(`Year: ${this.year}`);
    console.log(`Seater: ${this.seater}`);
    console.log(`Battery: ${this.battery}`);
  }
}

let Maruti = new Car("Maruti", 2020, 4);
console.log(Maruti);
Maruti.printCar();

let EV = new ElectricVehicle("Nexon", 2022, 2, "30kwh");
console.log(EV);
EV.printCar();
