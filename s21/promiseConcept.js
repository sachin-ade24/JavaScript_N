const randomNumberPromise = new Promise((resolve, reject) => {
  //async operation
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve(randomValue);
    } else {
      reject(new Error("value is too small."));
    }
  }, 2000); //delay of 2 seconds
});

randomNumberPromise
  .then((result) => {
    //handler
    console.log("promise is fullfilled with a value ", result);
  })
  .catch((error) => {
    //handler
    console.error("promise is rejected", error);
  });
//1st run o/p: promise is fullfilled with a value  0.9554451976913714
//2nd run o/p: promise is rejected Error: value is too small.
