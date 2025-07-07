//for loop
//1. code without loop
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

console.log("=================================");

//1. code ewith 'for' loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("=================================");

//2. code with 'for...of' loop: (it is similar to for..each loop in Java)
const array = [1, 2, 3, 4, 5];
for (const e of array) {
  console.log(e);
}

console.log("=================================");

//3. code ewith 'for' loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("=================================");

//4.
// let d = 1;
// for (const q of d) {
//   console.log(q);
//   q++;
//   if (q > 5) {
//     break;
//   }
// }
//above code is invalid, because 'for..of' loop is valid for iterable variable
//but 'd' is not iterable

//while loop
//1.
let i = 1;
while (i < 11) {
  console.log(i);
  //i++;//valid
  //++i;//valid
  i = i + 1; //valid
}

console.log("=================================");

//2.
let j = 2;
while (j <= 10) {
  console.log(j);
  j = j + 2;
}

console.log("=================================");

//do-while loop
//1.
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);

console.log("=================================");

//use 'break' in 'while' and 'do-while' loop
//1. 'while' --> without break
let l = 1;
while (l <= 100) {
  console.log(l);
  if (l % 5 == 0) {
    console.log("hi..");
  }
  l++;
}

console.log("=================================");

//2. 'do-while' --> without break
let m = 1;
do {
  console.log(m);
  if (m % 5 == 0) {
    console.log("bye..");
  }
  m++;
} while (m <= 100);

console.log("=================================");

//3. 'while' --> with break
let n = 1;
while (n <= 100) {
  console.log(n);
  if (n % 5 == 0) {
    console.log("hi..");
    break;
  }
  n++;
}

console.log("=================================");

//2. 'do-while' --> with break
let o = 1;
do {
  console.log(o);
  if (o % 5 == 0) {
    console.log("bye..");
    break;
  }
  o++;
} while (o <= 100);

console.log("=================================");

//for..of with Array:
const browserArray = ["chrome", "firefox", "edge", "ie"];
for (const ba of browserArray) {
  console.log(ba);
  if (ba == "edge") {
    console.log("Launch the edge browser..");
    break;
  }
}

console.log("=================================");

//for..in loop on object;
const user = {
  name: "John doe",
  age: 30,
  city: "New York City"
};
for (const key in user) {
  console.log(`${key}: ${user[key]}`); //printing key value pair
  //console.log(key + ": " + user.key);//value --> undefined
}
console.log("=================================");

//for..in with Array:
const br = ["chrome", "firefox", "edge", "ie"];
for (const ele in br) {
  console.log(`${ele}: ${br[ele]}`);
}
//here 'ele' represents index
//br[ele] represents the actual String.. it is like br[0], br[1], br[2], br[3]
