const fs = require("fs"); // this is reuired to read the file & write the data to file
fs.readFile("info.txt", "utf-8", (error, data) => {
  console.log(data); //task1
});
//task2
console.log("Java is great.."); //task2 is executed first
//o/p:
//Java is great..
//Hi, I am learning javaScript.
