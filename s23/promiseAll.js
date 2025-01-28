//Case 1:
const function1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("Data from the function 1.");
      const data = [1, 2, 3, 4, 5];
      resolve(data);
    }, 2000);
  });
};

const function2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("Data from the function 2.");
      const data = [6, 7, 8, 9, 10];
      resolve(data);
    }, 2000);
  });
};

const function3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("Data from the function 3.");
      const data = [11, 12, 13, 14, 15];
      resolve(data);
    }, 2000);
  });
};

Promise.all([function1(), function2(), function3()])
  .then((dataArray) => {
    console.log("All data from different function", dataArray);
  })
  .catch((error) => {
    console.log("Error in promise ", error);
  });
//o/p:
//1.
/*All data from different function [
  'Data from the function 1.',
  'Data from the function 2.',
  'Data from the function 3.'
]*/
//2.
/*
All data from different function [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ] ]
*/

//Case2:
//f1 -- resolved
//f2 -- rejected

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from the getData");
    }, 2000);
  });
};

const getError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: data is not available from getError");
    }, 2000);
  });
};

Promise.all([getData(), getError()])
  .then((dataArray) => {
    console.log("All data fetched", dataArray);
  })
  .catch((error) => {
    console.log("Error occurred: ", error);
  });
//o/p:
/*
Error occurred:  Error: data is not available from getError
*/
