//1. Eliminate the duplicate values from array
const array = [1, 2, 3, 2, 3, 2, 5, 6, 2];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);
