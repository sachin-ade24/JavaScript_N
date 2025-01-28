const numbers = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
const names = [
  "Naveen",
  "Tom",
  "Lisa",
  "Naveen",
  "Peter",
  "Tom",
  "Raj",
  "Robby",
  "Tom"
];
const uniqueNumbers = [...new Set(numbers)];
const uniqueNames = [...new Set(names)];
console.log(uniqueNumbers);
//o/p:
/*
[
  1, 2, 3, 4,
  5, 6, 7
]
*/
console.log(uniqueNames);
//o/p:
/*
[ 'Naveen', 'Tom', 'Lisa', 'Peter', 'Raj', 'Robby' ]
*/
