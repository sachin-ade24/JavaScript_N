//Declaration of an Array
let myArray = [];
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
//the float, double and char are written in single quotes --> ''

let lang = ["Java", "Python", "JavaScript"];
//methods
//1.push: add the new element at the end of the array
//Appends new elements to the end of an array, and returns the new length of the array.
lang.push("Ruby", "HTML");
console.log(lang);

//2.pop: remove the last element from the array
//Removes the last element from an array and returns it.
//If the array is empty, undefined is returned and the array is not modified.
numbers.pop();
console.log(numbers); //[ 1, 2, 3, 4 ]

//3.shift: remove the first element from an array and return it
let firstFruit = fruits.shift();
console.log(firstFruit); //apple
console.log(fruits); //[ 'banana', 'orange' ]

//4.unshift: Inserts new elements at the start of an array, and returns the new length of the array.
let colors = ["red", "green", "black", "white"];
let newLength = colors.unshift("blue", "pink");
console.log(newLength); //6
console.log(colors); //[ 'blue', 'pink', 'red', 'green', 'black', 'white' ]

//5.splice:
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let animals = ["dog", "cat", "bird", "fish"];

//first digit is for start index and second for delete the number of objects/data from the start index

// let newArray = animals.splice(0, 0, "bear");
//start adding 'bear' at 0th index and delete 0 items from 0th index (this will be the latest i.e. 0th index before adding 'bear')
//or you can say that: delete 0 items after 'bear' in the current array i.e after adding the 'bear'
// console.log(animals); //[ 'bear', 'dog', 'cat', 'bird', 'fish' ]
// console.log(newArray); //[]

// let newArray0 = animals.splice(1, 0, "bear");
//start adding 'bear' at 1st index and delete 0 items from the 1st index (this will be the latest i.e. 0th index before adding 'bear')
//or you can say that: delete 0 items after 'bear' in the current array i.e after adding the 'bear'
// console.log(animals);//[ 'dog', 'bear', 'cat', 'bird', 'fish' ]
// console.log(newArray0);//[]

//let newArray1 = animals.splice(1, 1, "bear");
//start adding the 'bear' at 1st index and delete 1 item from the 1st index (this will be the latest i.e. 1st index before adding 'bear')
//or you can say that: delete 1 item after 'bear' in the current array i.e after adding the 'bear'
//console.log(animals); //[ 'dog', 'bear', 'bird', 'fish' ]
//console.log(newArray1); //['cat']

//let newArray2 = animals.splice(1, 2, "bear");
//start adding 'bear' at 1st index and delete 2 items from the 1st index (this will be the latest i.e. 1st index before adding 'bear')
//or you can say that: delete 2 items after 'bear' in the current array i.e after adding the 'bear'
//console.log(animals); //['dog', 'bear', 'fish' ]
//console.log(newArray2); //['cat', 'bird']

// let newArray3 = animals.splice(1, 3, "bear");
// console.log(animals); //['dog', 'bear']
// console.log(newArray3); //['cat', 'bird', 'fish']

// let newArray4 = animals.splice(2, 1, "bear");
// console.log(animals); //["dog", "cat", 'bear', 'fish']
// console.log(newArray4); //['bird']

// let newArray5 = animals.splice(2, 2, "bear");
// console.log(animals); //["dog", "cat", 'bear']
// console.log(newArray5); //['bird', 'fish']

//adding new item is not mandatory
// let newArray6 = animals.splice(2, 2);
// console.log(animals); //["dog", "cat"]
// console.log(newArray6); //['bird', 'fish']

//we can add multiple items too
let newArray7 = animals.splice(2, 2, "bear", "elephant");
console.log(animals); //["dog", "cat", "bear", "elephant"]
console.log(newArray7); //['bird', 'fish']

//6.slice
//Returns a copy of a section of an array. For both start and end,
//a negative index can be used to indicate an offset from the end of the array.
//For example, -2 refers to the second to last element of the array.
let pop = [1, 2, 3, 4, 5];
let newPop1 = pop.slice(1, 4);
//(startIndex, endIndex-1) --> (1, 4-1) --> (1, 3)
console.log(newPop1); //[ 2, 3, 4 ]
let newPop2 = pop.slice(0, 3);
//(startIndex, endIndex-1) --> (0, 3-1) --> (0, 2)
console.log(newPop2); //[ 1, 2, 3 ]
console.log(newPop2.length); //3

//7.concat
let fr = ["apple", "banana", "orange"];
let num = [1, 2, 3, 4];
let mixedArray1 = fr.concat(num);
console.log(mixedArray1); //[ 'apple', 'banana', 'orange', 1, 2, 3, 4 ]
let mixedArray2 = num.concat(fr);
console.log(mixedArray2); //[ 1, 2, 3, 4, 'apple', 'banana', 'orange' ]

//8.indexOf:
let colorsNew = ["red", "green", "blue", "red"];
let firstOccurrenceOfRed = colorsNew.indexOf("red");
console.log(firstOccurrenceOfRed); //0
//what if the value is not available
let blackColorIndex = colorsNew.indexOf("black");
console.log(blackColorIndex); //-1
//second occurrence
//let redColor2ndIndex = colorsNew.indexOf("red", 2); //start to count from index 2
//instead of hard coding the index like '2' in above case for finding 2nd occurrence, we can make it dynamic
let redColor2ndIndex = colorsNew.indexOf("red", colorsNew.indexOf("red") + 1);
console.log(redColor2ndIndex); //3

//9.includes
let test = ["admin", "customer", "seller", "vendor"];
console.log(test.includes("seller")); //true
console.log(test.includes("seller", "vendor")); //true
console.log(test.includes("seller", "Sachin")); //true
//because either of them is present in the above array
console.log(test.includes("Sachin", "Ade")); //false
//bothe are no the part of the array

//forEach
let n = [1, 2, 3, 4, 5, 6, 7];
n.forEach((e, i) => {
  console.log(`'e': ${e} and i: ${i} and addition is: ${e + i}`);
});

//o/p: here, 'e' --> element of an array | 'i' --> index of the element
//'e': 1 and i: 0 and addition is: 1
//'e': 2 and i: 1 and addition is: 3
//'e': 3 and i: 2 and addition is: 5
//'e': 4 and i: 3 and addition is: 7
//'e': 5 and i: 4 and addition is: 9
//'e': 6 and i: 5 and addition is: 11
//'e': 7 and i: 6 and addition is: 13
