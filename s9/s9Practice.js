//1. one parameter arraow function
const sqr = (num) => num * num;
console.log(sqr(5));

//2. no parameter arrow function
const msg = () => "Hello Sachin.";
console.log(msg());

//3. multiple param
const add1 = (a, b) => {
  return a + b;
};
console.log(add1(1, 5));
const add2 = (a, b) => a + b;
console.log(add2(1, 5));

const person = {
  firstName: "Sachin",
  lastName: "Ade"
};
const getName1 = (person) => `${person.firstName} ${person.lastName}`;
console.log(getName1(person)); //Sachin Ade
const getName2 = () => `${person.firstName} ${person.lastName}`;
console.log(getName2()); //Sachin Ade

//
const greet = (username = "Sachin", age = 35) =>
  `Hello, ${username}; You are ${age} years old.`;
console.log(greet()); //Hello, Sachin; You are 35 years old.

//
let sum1 = (...numbers) => numbers.map((n) => n + 1);
console.log(sum1(1, 2, 3, 4, 5)); //[ 2, 3, 4, 5, 6 ]
let sum2 = (...numbers) =>
  numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum2(1, 2, 3, 4, 5));

const browserInfo = (browser = "chrome", ...details) => {
  console.log(`browser: ${browser}`);
  console.log("other details: ", details);
};
browserInfo("firefox", "115.11", "mozilla", "headless");

//
const maxValue = (a, b, c) => {
  return Math.max(a, b, c);
};
console.log(maxValue(5, 4, 3));

//call-back example: not relevant to this practice file
const arr1 = [1, 2, 3];
function f1(array, action) {
  return array.map(action);
}
console.log(f1(arr1, (x) => x * 2));
