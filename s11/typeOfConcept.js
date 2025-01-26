//In JavaScript the type of variable is decided at runtime
let x = 30;
console.log(typeof x); //number

x = "Hello..";
console.log(typeof x); //string

x = {
  name: "John Cena",
  profession: "Actor"
};
console.log(typeof x); //object

let flag = true;
console.log(typeof flag); //boolean
let typeOfFlag = typeof flag;
console.log(typeOfFlag); //boolean

//
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr); //object

const j = null;
console.log(typeof j); //object

let y;
console.log(y); //undefined

function print(name) {
  console.log(name);
}
console.log(typeof print); //function

console.log("==========================");

//Constructor function
function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
const c1 = new Car("BMW", "520d", 10000);
console.log(typeof Car); //function
console.log(typeof c1); //object
console.log(typeof this.brand); //undefined
console.log(typeof brand); //undefined
console.log(typeof c1.brand); //string
console.log(typeof c1.price); //number
