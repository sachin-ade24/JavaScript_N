//Callback function: a function that is passed as an argument to another function.
//asynchronus call/task -- once this task is completed -- then only callback
//function will be called.

//1. basic callback --> without async
function greet(name, callback) {
  console.log("Hello " + name + ".");
  //above one is a normal/sync step/task but it could be async call/api
  callback();
}

//callback function
function welcome() {
  console.log("welcome!!!");
}

greet("Naveen", welcome);
//o/p
//Hello Naveen.
//welcome!!!

//callback with async function
function printInfo(name, callback) {
  //async function
  setTimeout(function () {
    console.log("printing info for " + name + ".");
    callback("please call me back.");
  }, 1000);
}

function displayMessage(msg) {
  console.log(msg);
}

printInfo("Lisa", displayMessage);
//printing info for Lisa.
//please call me back.

console.log("=========================================");

//
function fetchUserData(userId, callback) {
  setTimeout(function () {
    const users = {
      1: { id: 1, name: "Naveen" },
      2: { id: 2, name: "Tom" }
    };
    const user = users[userId];
    if (user) {
      callback(null, user);
    } else {
      callback("user not found.", null);
    }
  }, 1000);
}
//callback function
function handleUserData(error, user) {
  if (error) {
    console.error("Error: ", error);
  } else {
    console.log("User: ", user);
  }
}

fetchUserData(3, handleUserData); //User:  { id: 1, name: 'Naveen' }
