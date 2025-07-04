//1. function declaration

//1.1
function add(a, b) {
  return a + b;
}
console.log(add(10, 20)); //30

//1.2
function print() {
  console.log("Hi, this is JavaScript.");
} //Hi, this is JavaScript.
//console.log(print()); //undefined --> because we are not returning anything from the function

//2. function expression: is an anonymous function
const multiply = function (x, y) {
  return x * y;
};
const mul = multiply(5, 6);
console.log(mul); //30

//3. arrow function: is an anonymous function
const divide = (t1, t2) => t1 / t2;
const div = divide(20, 2);
console.log(div); //10

//4. function constructor:
//last parameter is the function body
const subtraction = new Function("a", "b", "return a - b;");
const subtract = subtraction(10, 2);
console.log(subtract); //8

const addition = new Function("a", "b", "retun a + b;");
const add = addition(10, 2);
console.log(add);

//5. Imediately Invoke function expression
(function () {
  console.log("My name is Sachin.");
})(); //My name is Sachin.tyy

//6.Generator function: generates a sequence of values
//'function*' and 'yield' keywords
function* generateNumbersSequence() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
const generator = generateNumbersSequence();
// console.log(generator.next().value); //1
// console.log(generator.next().value); //2
// console.log(generator.next().value); //3
// console.log(generator.next().value); //4
for (let i = 1; i <= 4; i++) {
  console.log(generator.next().value);
}

//7. Anonymous function
//no specific name
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(function (e) {
  return e * e;
});
console.log(squareNumbers); //[ 1, 4, 9, 16, 25 ]

const num1 = [1, 2, 3, 4, 5];
const sqrNum = num1.map((e) => {
  return e * e;
});
console.log(sqrNum);

//8. Recursive function
//function will call itself
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4)); //24

//9. higher-order or high-order function
function addition(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}

function operate(functionName, x, y) {
  return functionName(x, y);
}

let s = operate(addition, 10, 20);
console.log(s); //30

let m = operate(multiplication, 5, 4);
console.log(m); //20
