class Car {
  static wheels = 4;

  constructor(name, modelYear, price) {
    //'this' keyword represents current class object
    this.name = name;
    this.model = modelYear;
    this.price = price;
  }

  static stop() {
    console.log("Car -- stop");
  }
  drive() {
    console.log(this.name + " is running.");
  }
}

const c1 = new Car("Honda", 2023, 50);
console.log(`${c1.name}, ${c1.model}, ${c1.price}, ${Car.wheels}`);
//Honda, 2023, 50, 4
Car.stop();
//c1.stop(); //not allowed --> run-time error
c1.drive(); //Honda is running.
//Car.drive(); //not allowed --> run-time error
//console.log(wheels); //not allowed
