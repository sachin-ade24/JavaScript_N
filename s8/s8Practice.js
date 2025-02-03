//1.
function add(a, b) {
  return a + b;
}
console.log(add(18, 22));

function print() {
  console.log("Hi, this is JavaScript.");
}

//2. function expression: is an anonymous function
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(24, 5));

//3. arrow function: is an anonymous function
const divsn = (d1, d2) => {
  return d1 / d2;
};
console.log(divsn(100, 10));

//4. function constructor:
const sub = Function("a", "b", "return a-b;");
console.log(sub(10, 2));

const mul = new Function("a", "b", "return a*b;");
console.log(mul(10, 2));

//5. Imediately Invoke function expression
(function (a, b, c) {
  console.log(a + b + c);
})(1, 2, 3);

(function () {
  console.log("My name is Sachin.");
})();

//6.
let numbers = [1, 2, 3, 4, 5];
// let sqrArr = numbers.map((n) => n * n); // normal way
let sqrArr = numbers.map(function (e) {
  return e * e;
});
console.log(sqrArr);

let cubeArr = numbers.map((c) => {
  return c * c * c;
});
console.log(cubeArr);

//7. Recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

//8.
function add1(a, b) {
  return a + b;
}
function mul1(a, b) {
  return a * b;
}
function sub1(a, b) {
  return a - b;
}
function div1(a, b) {
  return a / b;
}

function higherOrderFunction(functionName, x, y) {
  return functionName(x, y);
}

console.log(higherOrderFunction(mul1, 20, 5));
