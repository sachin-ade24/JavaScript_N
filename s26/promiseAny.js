//Case1:
const getMessage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Get message from API 1.");
    }, 500);
  });
};

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: user data could not be fetched.");
    }, 200);
  });
};

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: product info could not be fetched.");
    }, 1000);
  });
};

Promise.any([getMessage(), getUsers(), getProducts()])
  .then((result) => {
    console.log("First successfull result: ", result);
  })
  .catch((errors) => {
    console.log("All promises rejected: ", errors);
  });
//o/p:
/*
First successfull result:  Get message from API 1.
*/

//Case2:
const getMessage1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Get message1 from API 1.");
    }, 500);
  });
};

const getUsers1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("PASS get user1.");
    }, 200);
  });
};

const getProducts1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("PASS get product1.");
    }, 1000);
  });
};

Promise.any([getMessage1(), getUsers1(), getProducts1()])
  .then((results) => {
    console.log("results: ", results);
  })
  .catch((errors) => {
    console.log("All promises rejected: ", errors);
  });
//o/p:
/*
results:  PASS get user1.
*/

//Case3:
const getMessage2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error1: could not get message2 from API 1.");
    }, 500);
  });
};

const getUsers2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error2: user2 info could not be fetched.");
    }, 200);
  });
};

const getProducts2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error3: product2 info could not be fetched.");
    }, 1000);
  });
};

Promise.any([getMessage2(), getUsers2(), getProducts2()])
  .then((results) => {
    console.log("results: ", results);
  })
  .catch((errors) => {
    console.log("All promises rejected: ", errors);
  });
//o/p:
/*
All promises rejected:  [AggregateError: All promises were rejected] {
  [errors]: [
    'Error1: could not get message2 from API 1.',
    'Error2: user2 info could not be fetched.',
    'Error3: product2 info could not be fetched.'
  ]
}
*/
