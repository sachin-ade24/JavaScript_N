//1. push: add an element/object at the ened of an array
let lang = ["Java", "Python", "JavaScript"];
lang.push("Ruby");
console.log(lang);
console.log(lang.length);

//2. pop: remove last element of an array
let numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);
console.log(numbers.length);

//3. For loops:
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i <= fruits.length - 1; i++) {
  console.log(fruits[i]);
}
for (const s in fruits) {
  console.log(s + ": " + fruits[s]);
}
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

//4. shift: removes first element from an array and return it
firstFruit = fruits.shift();
console.log(firstFruit);
fruits.push(firstFruit);
console.log(fruits);

//\5. unshift: Inserts new elements at the start of an array, and returns the new length of the array.
let colors = ["red", "green", "black", "white"];
let num = colors.unshift("pink", "violet");
console.log(num);
console.log(colors);

//6.splice:
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let animals = ["dog", "cat", "bird", "fish"];
let deletedItems = animals.splice(1, 3, "Sachin1", "Sachin2");
console.log(animals);
console.log(deletedItems);

//7.slice
//Returns a copy of a section of an array. For both start and end,
//a negative index can be used to indicate an offset from the end of the array.
//For example, -2 refers to the second to last element of the array.
let test = [1, 2, 3, 4, 5];
//let test1 = test.slice(2, 4);
let test2 = test.slice(0, -2);
//console.log(test1);
console.log(test2);

//8.concat
let fr = ["apple", "banana", "orange"];
let num1 = [1, 2, 3, 4];
let concatedArr1 = fr.concat(num1);
let concatedArr2 = num1.concat(fr);
console.log(concatedArr1);
console.log(concatedArr2);
console.log(num1.concat(num1));
console.log(num1.reverse());

//9.indexOf:
let colorsNew = ["red", "green", "blue", "red"];
console.log(colorsNew.indexOf("blue")); //2
let blackColorIndex = colorsNew.indexOf("black");
console.log(blackColorIndex); //-1
//console.log("blue".charAt(0));//b

//10.includes
let test1 = ["admin", "customer", "seller", "vendor"];
console.log(test1.includes("customer", "Sachin", "Ade")); //true
// at least one element should be part of thr array
