function getEvenNumber(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 == 0) {
        resolve(value);
      } else {
        reject(new Error("value is not a even number."));
      }
    }, delay);
  });
}

//promise chain
getEvenNumber(4, 1000)
  .then((result) => {
    console.log("step1: getting the reult with even number: ", result);
    return getEvenNumber(6, 2000);
  })
  .then((result) => {
    console.log("step2: getting the reult with even number: ", result);
  })
  .catch((error) => {
    console.error("promise chain error: ", error);
  });
//o/p:
//step1: getting the reult with even number:  4
//step2: getting the reult with even number:  6
