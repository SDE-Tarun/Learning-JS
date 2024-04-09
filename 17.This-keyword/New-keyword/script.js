function car(color, wheels, seats) {
    this.color = color;
    this.wheels = wheels;
    this.seats = seats;
}

// NEW KEYWORD - EMPTY OBJECT BANAYEGA AUR USME VALUES DALKE CAR1 KO ASSIGN KRDEGA
let car1 = new car('Black', 4, 7);

let car2 = new car('White', 4, 5);

console.log(car1);

console.log(car2);