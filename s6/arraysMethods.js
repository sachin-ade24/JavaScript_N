//1.map: returns an array
/*
The map method creates a new array populated with the results of calling a provided function 
on every element in the calling array. 
It does not modify the original array but returns a new array with the transformed values.
The map method is often used for data transformation tasks, 
such as converting an array of numbers to their squares or extracting specific properties from an array of objects.
*/
let numbers = [1, 2, 3];
let multipleOf1 = numbers.map((e) => e);
console.log(multipleOf1); //[ 1, 2, 3 ]
let multipleOf2 = numbers.map((e) => e * 2); // returns an array
console.log(multipleOf2); //[ 2, 4, 6 ]

//F --> C
//C=(F-32)*(5/9)
let fahTemp = [32, 68, 86, 104, 212];
function fahToCel(fah) {
  return (fah - 32) * (5 / 9);
}
// let celciusTemp = fahTemp.map((celTemp) => fahToCel(celTemp)); //valid
let celciusTemp = fahTemp.map(fahToCel); //valid --> because: 'fahToCel' is itself a function. So, we don't
//need to create a calllback function like we created on line no. 3 and 5
console.log(celciusTemp); //[ 0, 20, 30, 40, 100 ]

//2. filter
/*
The filter method creates a new array with all elements that pass the test implemented by the provided function. 
It calls the function for each element in the array 
and includes the element in the new array if the function returns true.
The filter method does not modify the original array 
and is useful for extracting a subset of elements based on certain criteria, 
such as finding all even numbers or filtering out invalid entries.
*/
//2.1
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = num.filter((e) => e % 2 === 0);
console.log(evenNum); //[ 2, 4, 6, 8, 10 ]

//2.2
let employee = [
  { name: "John", age: 30, gender: "male" },
  { name: "Bob", age: 35, gender: "male" },
  { name: "Lisa", age: 40, gender: "female" },
  { name: "Priya", age: 25, gender: "female" },
  { name: "Peter", age: 55, gender: "male" }
];
let femaleEmpOver30 = employee.filter((emp) => {
  return emp.gender === "female" && emp.age > 30;
});
console.log(femaleEmpOver30); //[ { name: 'Lisa', age: 40, gender: 'female' } ]

//3. reduce
/*
The reduce method executes a reducer function (that you provide) on each element of the array, 
resulting in a single output value. 
The reducer function takes two arguments: the accumulator (which accumulates the callback's return values) 
and the current value (the current element being processed).
The reduce method is commonly used for summing up elements, finding averages, 
or performing other cumulative operations.
*/
let numb = [1, 2, 3, 4, 5]; //sum = 15
let sum = numb.reduce((acc, num) => acc + num, 0); //acc can be anything.. acc should be initialized according to your
//required logic
//iterations:
//1st --> acc = 0, num = 1 --> 0 + 1 = 1; 1 is given to again --> acc
//2nd --> acc = 1, num = 2 --> 1 + 2 = 3; 3 is given to again --> acc
//3rd --> acc = 3, num = 3 --> 3 + 3 = 6; 6 is given to again --> acc
//4th --> acc = 6, num = 4 --> 6 + 4 = 10; 10 is given to again --> acc
//5th --> acc = 10, num = 5 --> 10 + 5 = 15; 15 is given to again --> acc
console.log(sum); //15

//3.1 max no. in array
let numr = [10, 5, 25, 8, 30, 15];
let maxNum = numr.reduce((max, num) => {
  if (num > max) {
    return num;
  } else {
    return max;
  }
}, numr[0]);
console.log(maxNum);

//3.2 minNum
let minNum = numr.reduce((min, num) => {
  if (num < min) {
    return num;
  } else {
    return min;
  }
}, numr[0]);
console.log(minNum);

//3.3 cart: name, price
let cartItems = [
  { name: "Jeans", price: 500 },
  { name: "Shirt", price: 300 },
  { name: "Shoes", price: 1000 },
  { name: "Hat", price: 100 },
  { name: "T-shirt", price: 400 }
];

let totalPrice = cartItems.reduce(
  (total, cartItem) => total + cartItem.price,
  0
);
console.log(totalPrice); //2300
