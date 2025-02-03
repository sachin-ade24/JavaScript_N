//for..in loop
const user = {
  name: "Sachin",
  age: 35,
  city: "Pune"
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (const j in fruits) {
  console.log(fruits[j]);
}
for (const k of fruits) {
  console.log(k);
}
fruits.forEach((fruit) => {
  console.log(fruit);
});
