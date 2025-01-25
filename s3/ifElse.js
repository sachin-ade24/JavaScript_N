/*note: Do not write 'break' in if-else blocks. Because it is not supported in the if-else of the JavaScript. 
        It is supported for the 'for', 'while', 'do-while' loops and switch-case statements in the JavaScript.
        If use the 'if-else' within 'for loop' or 'switch-case' then the 'break' is valid.
*/

//1.
function checkAge(name, age) {
  if (age >= 18) {
    console.log(`Hi ${name}, your old enough to vote.`);
  } else {
    console.log(`Sorry ${name}, you must be 18 years old to vote.`);
  }
}

checkAge("Suraj", 20);
checkAge("Satish", 15);

//2.
function checkNumber(number) {
  if (number > 0) {
    console.log(`The given number, ${number}, is positive.`);
  } else if (number < 0) {
    console.log(`The given number, ${number}, is negative.`);
  } else {
    console.log("The number is neither positive nor negative, its a Zero.");
  }
}
checkNumber(0);
checkNumber(10);
checkNumber(-1);

//3.
//nested if-else
function checkGrade(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else {
    if (score >= 80) {
      grade = "B";
    } else {
      if (score >= 70) {
        grade = "C";
      } else {
        grade = "D";
      }
    }
  }
  console.log(grade);
}
checkGrade(85); //B
checkGrade(0); //D
checkGrade(90); //A

//4.
function launchTheBrowser(browser) {
  if (browser == "chrome") {
    console.log(`launche the '${browser}' browser.`);
  } else if (browser == "firefox") {
    console.log(`launche the '${browser}' browser.`);
  } else if (browser == "edge") {
    console.log(`launche the '${browser}' browser.`);
  } else if (browser == "safari") {
    console.log(`launche the '${browser}' browser.`);
  } else {
    console.log("please opass the right browser.");
  }
}
launchTheBrowser("chrome");
