//var=====================================================================================
//1.
var v = 10; //global
function test() {
  var v = 20; //local
  return v;
}
console.log(v); //10
console.log(test()); //20

//2.
function f1() {
  var v = 30;
  console.log(v);
}
//in order to print the f1 function, you need to call it
f1(); //30

//3.
var v1 = 50;
var v1 = 40; // I can initialize the var again
console.log(v1); //40

//4.
var v2 = 100;
//I can use same function name again
// function f1() {
//   console.log(v2);
// }
// f1();//100
//The problem, here, is for first f1() it says o/p is 'undefined'
//for the second or latest f1() it gives expected o/p
//but if you change the name of function then it will give o/p as expected
function f2() {
  console.log(v2);
}
f2(); //100

//5.
var v3 = 35;
function f3() {
  var v3 = 45;
}
console.log(v3); //35

//6.
var v4 = 53;
var t = 50;
if (t > 45) {
  var v4 = 54;
}
console.log(`the value of v4 is: ${v4}`); //54
//this is a weird behaviour of var

//7.
var v5 = 44;
function f4() {
  if (v5 > 43) {
    var v5 = 55;
  }
}
console.log(v5); //44

//let=====================================================================================
//scope = block scope ==> {}

let m = "hey Sachin";
//let t = 4;// it says: Identifier 't' has already been declared
//so, for let you cannot re-declare the same variable like 'var'
let t1 = 4;
if (t1 > 3) {
  let m = "hey Suraj";
  let mq = "mq";
  console.log(mq);
  console.log(m); //hey Suraj
  //after or out side this block the 'hey Suraj' will not get printed
}
//console.log(mq); //ReferenceError: mq is not defined
//because the 'mq' is block scoped
console.log(m); //hey Sachin

//
var vr1 = 10;
var vr1 = 15; //valid
let lt1 = 11;
//let lt1 = 12;//invalid
//but we can again initialoze a let
lt1 = 12; //valid

//const=====================================================================================
//const should be used when the values are not going to change
//e.g. days of week, months of year etc
const ct1 = "Sachin";
//const ct1 = "Sum";//not allowed
//ct1 = "Suraj"; //no compile-time error
//TypeError: Assignment to constant variable. ==> at line 93 ==> invalid
//but it will throw the run-time error
console.log(ct1);

let l1; //valid at compile-time and no error at the run-time
//const c1;//invalid at compile-time
console.log(l1); //undefined
