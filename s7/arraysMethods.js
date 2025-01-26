//1. every(): every element in an array should pass the condition
//returns boolean
let num = [1, 2, 3, 4, 5];
let flag = num.every((e) => e < 10);
console.log(flag); //true

//2. some(): at least one element of an array should pass the condition
//opposite of every
let number = [1, 2, 3, 4, 5];
let fg = number.some((e) => e % 2 === 0);
console.log(fg); //true
let f = number.some((b) => b > 20);
console.log(f); //false

//3.find():
let numb1 = [1, 2, 3, 7, 9];
let firstElement = numb1.find((n) => n % 2 === 0);
console.log(firstElement); //2
let numb2 = [1, 5, 3, 7, 9];
let firstEle = numb2.find((n) => n % 2 === 0);
console.log(firstEle); //undefined

//4. indexOf:
let fruitsArr = ["apple", "banana", "mango", "pear"];
let indexOfGivenFruit = fruitsArr.indexOf("orange");
console.log(indexOfGivenFruit); //-1
indexOfGivenFruit = fruitsArr.indexOf("mango");
console.log(indexOfGivenFruit); //2

//5. lastIndexOf():
let fruits1 = ["apple", "banana", "mango", "pear", "apple"];
let lastIndexOfApple = fruits1.lastIndexOf("apple");
console.log(lastIndexOfApple); //4
let fruits2 = ["apple", "apple", "banana", "mango", "pear"];
lastIndexOfApple = fruits2.lastIndexOf("apple");
console.log(lastIndexOfApple); //1

//6. reverse():
let fruitsArray = ["apple", "banana", "mango", "pear"];
let reverseArray = fruitsArray.reverse();
console.log(reverseArray); //[ 'pear', 'mango', 'banana', 'apple' ]

//7. sort(); Sorts an array in place. This method mutates the array and returns a reference to the same array.
//for strings sorts alphabetically
//if numbers occur in the string first, it will give priority to that string first
//the special symbols will get highest priority
let products1 = ["Mackbook", "iPhone", "Samsung", "Cannon"];
let sortedArr1 = products1.sort();
console.log(sortedArr1); //[ 'Cannon', 'Mackbook', 'Samsung', 'iPhone' ]
let products2 = [
  "Mackbook",
  "iPhone",
  "Samsung",
  "Cannon",
  "123Test",
  "1#Ts",
  "$T-shirt"
];
let sortedArr2 = products2.sort();
console.log(sortedArr2);
//o/p:
/*[
    '$T-shirt',
    '1#Ts',
    '123Test',
    'Cannon',
    'Mackbook',
    'Samsung',
    'iPhone'
]
*/
