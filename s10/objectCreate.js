//1. Object Literals: {}
const user = {
  name: "Michael",
  age: 25,
  country: "USA",
  Occupation: "Engineer"
};
console.log(user.name); //Michael
console.log(user.Occupation); //Engineer

//2. Constructor function
function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
const c1 = new Car("BMW", "520d", 10000);
console.log(`Brand: ${c1.brand} | Model: ${c1.model} | Price: ${c1.price}`);
//Brand: BMW | Model: 520d | Price: 10000
const c2 = new Car("Audi", "Q7", 15000);
console.log(`Brand: ${c2.brand} | Model: ${c2.model} | Price: ${c2.price}`);
//Brand: Audi | Model: Q7 | Price: 15000

//3. Class style:
class Customer {
  constructor(name, product) {
    //instance variable --> this.name; local or constructor variable: name
    this.name = name;
    //instance variable --> this.product; local or constructor variable: product
    this.product = product;
  }

  addToCart() {
    console.log(`${this.product} added to cart.`);
  }
}
//create instance/object of the class
const cust1 = new Customer("Naveen", "Macbook pro");
console.log(`${cust1.name} has purchased ${cust1.product}.`); //Naveen has purchased Macboock pro.
cust1.addToCart(); //Macboock pro added to cart.

//4. Object.create() method with some prototype
//creating prototype:
const employeePrototype = {
  printInfo: function () {
    console.log(`Hello, the employee name is ${this.name}.`);
  }
};
const e1 = Object.create(employeePrototype);
e1.name = "Tom";
e1.printInfo(); //Hello, the employee name is Tom.

//4. using the Factory Function: returns ab object.
function createDepartment(deptName, hod) {
  return {
    deptName: deptName,
    hod: hod,
    getDepartmentInfo: function () {
      console.log(
        `The department name is ${this.deptName} and hod is ${this.hod}`
      );
    }
  };
}
//createDepartment("Physics", "H C Verma");
//this will not print anything on the console,
//because we need to call the function 'getDepartmentInfo' to print info on the console

const dept1 = createDepartment("Physics", "H C Verma");
const dept2 = createDepartment("Maths", "Shri Ramanujan");
dept1.getDepartmentInfo(); //The department name is Physics and hod is H C Verma
dept2.getDepartmentInfo(); //The department name is Maths and hod is Shri Ramanujan
console.log(`Departrmrnt: ${dept1.deptName} | HOD: ${dept1.hod}`); // Departrmrnt: Physics | HOD: H C Verma

let objectArr = [
  {name: "Prince", age: 4, class: "Nursery"},
  {name: "Samarth", age: 2, class: "Play group"},
  {name: "Sachi", age: 1, class: "Play group"},
  {name: "Advik", age: 4, class: "Nursery"}
]

let newArr1 = objectArr.filter((element) =>  {return element.age === 4 && element.class === "Nursery"});
console.log(newArr1[0].name);

objectArr.forEach((e)=>{
  console.log(`Name: ${e.name} | Age: ${e.age} | Class: ${e.class}`);
})

//
for(const e in objectArr){
  console.log(objectArr[e]);
}
for(const e in objectArr){
  console.log(`Name: ${objectArr[e].name} and Age: ${objectArr[e].age}`);
}
for(const ele in objectArr){
  console.log(ele + `) ${objectArr[ele].name}`);
}

//for..in loop on object;
const user1 = {
  name: "John doe",
  age: 30,
  city: "New York City"
};
for (const key in user1) {
  console.log(`${key}: ${user1[key]}`); //printing key value pair
}

for(const el of objectArr){
  console.log(el);
}