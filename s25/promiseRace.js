const resolvePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved!");
    }, 100);
  });
};
const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected!");
    }, 500);
  });
};

Promise.race([resolvePromise(), rejectPromise()])
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
