const fs = require("fs"); // this is reuired to read the file & write the data to file
const data = fs.readFileSync("info.txt", "utf-8"); //utf-8 --> encoding type
//task1
console.log(data); //Hi, I am learning javaScript.
//task2
console.log("Java is awesome.."); //Java is awesome too..
//o/p:
//task1 must be executed first and then 2nd
//Hi, I am learning javaScript.
//Java is awesome too..
