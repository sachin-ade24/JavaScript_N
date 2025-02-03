//Method overloading is not possible in the JavaScript
function print() {
  console.log("hi");
}

print(); //hi undefined age undefined --> still executes 3rd function only
//it doesn't matter whether you are calling your function after 1st function, 2nd function or 3rd function

function print(name) {
  console.log("hi " + name);
}

function print(name, age) {
  console.log("hi " + name + " age " + age);
}

//calling
print(); //hi undefined age undefined --> It is executing the 3rd function and undefined is coming because
//we didn't pass any value in the parenthesis of the 'print()' method.
//In javaScript, if we have above scenario, then at the runtime:
//1. The first function i.e. 'print()' function is replaced by the 'print(name)'
//2. The 2nd function i.e. 'print(name)' is replaced by print(name, age)
//and hence it will always execute only the last method or function i.e. 'print(name, age)'

print("Sachin", 35); //hi Sachin age 35

console.log("============================================================");

//to achieve the method overloading you can follow the follwoing approach
//scenario
//run your test cases on a remote machine
//browserName, browserVersion, remoteExecution
function displayBrowserInfo(browserName, browserVersion, remoteExecution) {
  if (
    typeof browserVersion === "number" &&
    typeof remoteExecution == "boolean"
  ) {
    console.log(
      `Browser: ${browserName} | Version: ${browserVersion} | isRemote: ${remoteExecution}`
    );
  } else if (typeof browserVersion === "number") {
    console.log(`Browser: ${browserName} | Version: ${browserVersion}`);
  } else {
    console.log(`Browser: ${browserName}`);
  }
}

displayBrowserInfo("chrome", 125, true); //Browser: chrome | Version: 125 | isRemote: true
displayBrowserInfo("chrome", 125); //Browser: chrome | Version: 125
displayBrowserInfo("chrome"); //Browser: chrome
