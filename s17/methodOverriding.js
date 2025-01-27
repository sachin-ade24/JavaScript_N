class Car {
  minSpeed = 100;
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log("Starting engine.. for Car.");
  }
}

class Audi extends Car {
  minSpeed = 150;
  startEngine() {
    console.log("Starting engine.. for Audi.");
  }

  autoParking() {
    console.log("Audi -- auto parking.");
  }
}

const audi = new Audi();
audi.startEngine(); //Starting engine.. for Audi.
audi.autoParking(); //Audi -- auto parking.
console.log(audi.minSpeed); //150

const car = new Car();
car.startEngine(); //Starting engine.. for Car.
