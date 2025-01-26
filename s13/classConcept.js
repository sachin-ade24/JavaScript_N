class Car {
  //Constructor overloading is not applicable in the JavaScript i.e.
  //duplicate constructor is not allowed
  constructor(name, price, model, color) {
    (this.name = name),
    (this.price = price),
    (this.model = model),
    (this.color = color);
  }

  refuel() {
    console.log(this.name + " car is refueled.");
  }
}

//create an object

const c1 = new Car("BMW", 100, "520d", "Black");
console.log(c1.name); //BMW
console.log(c1.price); //100
console.log(c1.model); //520d
console.log(c1.color); //Black
c1.refuel();

console.log("====================================");

const c2 = new Car("Honda", 20, "Civic", "White");
console.log(c2.name); //Honda
console.log(c2.price); //20
console.log(c2.model); //Civic
console.log(c2.color); //White
c2.refuel();
