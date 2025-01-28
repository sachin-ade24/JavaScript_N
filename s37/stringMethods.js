//1. length:
console.log("JavaScript".length);

//2.
console.log("JavaScript"[2]); //v

//3. charAt
console.log("JavaScript".charAt(4)); //S

//4. charCodeAt
console.log("JavaScript".charCodeAt(4)); //gives equivalent ASCII value --> S: 83

//5. toLowerCase, toUpperCase
console.log("JavaScript".toLowerCase());
console.log("JavaScript".toUpperCase());

//6. slice
console.log("JavaScript".slice(2, -5)); //vas

//7. substring
console.log("JavaScript".substring(2, 6)); //vaSc
console.log("JavaScript".substring(-2, 2));
//in substring method it will convert -2 into 0
//so, it is actually ("JavaScript".substring(0, 2)) --> o/p is: Ja

//8. concat
console.log("Sachin".concat(" Baburao").concat(" Ade"));

//9. split
let lang = "Java_JavaScript_Python";
const splittedLangArr = lang.split("_");
console.log(splittedLangArr[0]); //Java
console.log(splittedLangArr[1]); //Python
console.log(splittedLangArr[5]); //undefined

//10. includes
console.log("JavaScript".includes("Java")); //true
console.log("JavaScript".includes("Hi")); //false

//11. replace, replaceAll
console.log("Dev Test Framework".replace("Dev", "JS"));
console.log("Dev Test Framework Dev".replaceAll("Dev", "JS"));
console.log("01-01-1990".replaceAll("-", "/"));

//12. trim, trimStart, trimEnd
console.log("  hello JS  ".trim());
console.log("  hello JS  ".trimStart());
console.log("  hello JS  ".trimEnd());

//13. padEnd
console.log("Sachin".padEnd(10, "*")); //Sachin****
console.log("Dev".padEnd(10, "*")); //Dev*******

//14. padStart
console.log("Sachin".padStart(10, "*")); //****Sachin
console.log("Dev".padStart(10, "*")); //*******Dev

//15. startsWith
console.log("Sachin".startsWith("S")); //true
console.log("Sachin".startsWith("K")); //false

//16. endsWith
console.log("Sachin".endsWith("n")); //true
console.log("Sachin".endsWith("K")); //false

//17. repeat
console.log("Sachin".repeat(2));

//18. indexOf
console.log("Naveen Automation Labs is awesome.".indexOf("Automation")); //7
console.log("Naveen Automation Labs is awesome.".indexOf("A"));
console.log("Naveen Automation Labs is awesome.".indexOf("Naveen"));
console.log("Naveen Automation Labs is awesome.. Naveen".lastIndexOf("Naveen"));

//19. search
console.log("Naveen Automation Labs is awesome.".search("Automation")); //7
