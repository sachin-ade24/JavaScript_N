//Interview programs

//1. count frequency of characters
function getCharFreq(strg){
	let freq = {};
    for(let char of strg){
    	freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
let str = "Hhello world.."
console.log(getCharFreq(str));


//2. Reverse a string
function reverseTheString(str){
  return str.split("").reverse().join("");
}
console.log(reverseTheString("Sachin Ade."))


//3. Write a Program to check whether a string is a palindrome string.
function isPalindrome(str){
  const reversedString = reverseTheString(str);
  return str == reversedString;
}
console.log(isPalindrome("abba"));

//Largest no. in an array
function findLargest(arr) {
    //Suppose first element is the largest
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            // Update the largest if a bigger element is found
            largest = arr[i]; 
        }
    }
    return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));


//Rotate elements of array to left
const fruits = ["Banana", "Apple", "Mango", "Orange"];
let n = 2;
for (let i = 1; i <= n; i++) {
    let ele = fruits.shift();
    fruits.push(ele);
}
console.log(fruits);
//o/p: [ 'Mango', 'Orange', 'Banana', 'Apple' ]


//Rotate elements of array to right
for (let i = 1; i <= n; i++) {
    let ele = fruits.pop();
    fruits.unshift(ele);
}
console.log(fruits);
//o/p: [ 'Mango', 'Orange', 'Banana', 'Apple' ]
