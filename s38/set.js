/*

A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

The values can be of any type, primitive values or objects.

*/

//1.
const s1 = new Set([1, 2, 3, 4, 5]);
console.log(s1);
//o/p: Set(5) { 1, 2, 3, 4, 5 }

//2.
const s2 = new Set();
s2.add('a');
s2.add('b');
s2.add('c');
s2.add('d');
console.log(s2);
//o/p: Set(4) { 'a', 'b', 'c', 'd' }

//3.
const s3 = new Set([10, 10, 25, 45, 50, 25]);
console.log(s3);
//o/p: Set(4) { 10, 25, 45, 50 }

//4.
const letters = new Set(["a","b","c"]);
let text = "";
for (const x of letters) {
  text += x;
}
console.log(text);//abc