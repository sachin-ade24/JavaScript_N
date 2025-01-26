//1. one parameter arraow function
const square = (num) => num * num;
const result = square(5);
console.log(result); //25

//2. no parameter arrow function
const message = () => "hello JS";
//console.log(message); //[Function: message]
console.log(message()); //hello JS

//3. multiple param
const add = (a, b) => a + b;
console.log(add(7, 9)); //16

const person = {
  firstName: "Naveen",
  lastName: "Automation Labs"
};
//you can write the function with one arguement
const getFullName1 = (person) => `${person.firstName} ${person.lastName}`;
const fullName1 = getFullName1(person);
console.log(fullName1); //Naveen Automation Labs
//you can write the same function without arguement
const getFullName2 = () => `${person.firstName} ${person.lastName}`;
const fullName2 = getFullName2();
console.log(fullName2); //Naveen Automation Labs

//
const greet = (username = "guest", age = 20) =>
  `Hello, ${username}; You are ${age} years old.`;
const g1 = greet();
console.log(g1); //Hello, guest; You are 20 years old.
const g2 = greet("Tom", 30);
//here, it will ignore the default values i.e. --> '(username = "guest", age = 20)' and gives the values
//mentioned in the parenthesis of the 'greet'
console.log(g2); //Hello, Tom; You are 30 years old.

//rest parameters ... var args//takes multiple values in the parenthesis as parameters
let sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
let total = sum(1, 2, 3, 4, 5);
console.log(total); //15

const browserInfo = (browser = "chrome", ...details) => {
  console.log(`browser: ${browser}`);
  console.log("other details: ", details);
  //console.log("other details: ", (details = ["version: 1", "memory: 100MB"]));
};
// for line no. 46:
//browserInfo();
//o/p:
//browser: chrome
//other details:  [ 'version: 1', 'memory: 100MB' ]

//for line no. 45:
//1.
browserInfo();
//o/p:
//browser: chrome
//other details:  []
//2.
browserInfo("firefox", "115.11", "mozilla", "headless"); //
//o/p:
//browser: firefox
//other details:  [ '115.11', 'mozilla', 'headless' ]

//find max number
const maxValue = (a, b, c) => {
  return Math.max(a, b, c);
};
const minValue = (a, b, c) => {
  return Math.min(a, b, c);
};
console.log(maxValue(1, 2, 3)); //3
console.log(minValue(1, 2, 3)); //1
