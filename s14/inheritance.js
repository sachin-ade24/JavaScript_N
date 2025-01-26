//parent (super class)
class Cycle {
  constructor(make, year) {
    this.make = make;
    this.year = year;
  }
}

class Automobile {
  constructor(chasisNumber) {
    this.chasisNumber = chasisNumber;
  }

  useAeroDynamic() {
    console.log("Automobile -- useAeroDynamic with " + this.chasisNumber);
  }
}

//1. Multi-level inheritence is possible in JavaScript
//2. Multiple inheritence is not possible in JavaScript
class Vehicle extends Automobile {
  constructor(make, model, year) {
    super(11001);
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `Company: ${this.make} | Model: ${this.model} | Year: ${this.year}`;
  }

  startEngine() {
    console.log("Starting the engine for " + this.make + " " + this.model);
  }

  stopEngine() {
    console.log("Stopping the engine for " + this.make + " " + this.model);
  }
}

//child class or sub class --> Classes can only extend a single class
class Car extends Vehicle /*, cycle */ {
  constructor(make, model, year, fuelType) {
    super(make, model, year);
    this.fuelType = fuelType;
  }

  driveTheCar() {
    console.log(`Driving the car ${this.model} ${this.fuelType}`);
  }
}

//child class or sub class
class Truck extends Vehicle {
  constructor(make, model, year, loadingCapacity) {
    super(make, model, year);
    this.loadingCapacity = loadingCapacity;
  }

  driveTheTruck() {
    console.log(
      `Driving the truck ${this.model} and the loading capacity is ${this.loadingCapacity}.`
    );
  }
}

//start creating objects/instances
const car = new Car("Honda", "Civic", 2023, "Petrol");
const truck = new Truck("Tata", "Sumo", 2020, 1000);

//Car
car.driveTheCar(); //Driving the car Civic Petrol
car.startEngine(); //Starting the engine for Honda Civic
car.stopEngine(); //Stopping the engine for Honda Civic
console.log(car.getInfo()); //Company: Honda | Model: Civic | Year: 2023
console.log(car.fuelType); //Petrol
car.useAeroDynamic(); //Automobile -- useAeroDynamic
console.log(car.chasisNumber); //11001

//Truck
truck.driveTheTruck(); //Driving the truck Sumo and the loading capacity is 1000.
truck.startEngine(); //Starting the engine for Tata Sumo
truck.stopEngine(); //Stopping the engine for Tata Sumo
console.log(truck.loadingCapacity); //1000
console.log(truck.getInfo()); //Company: Tata | Model: Sumo | Year: 2020
