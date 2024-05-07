/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  let promise = new Promise(function (resolve, reject) {
    if (t < 0) {
      reject(new Error("Wait time must be a positive number"));
    } else {
      setTimeout(function () {
        resolve();
      }, 1000 * t);
    }
  });
  return promise;
}

function wait2(t) {
  let promise = new Promise(function (resolve, reject) {
    if (t < 0) {
      reject(new Error("Wait time must be a positive number"));
    } else {
      setTimeout(function () {
        resolve();
      }, 1000 * t);
    }
  });
  return promise;
}

function wait3(t) {
  let promise = new Promise(function (resolve, reject) {
    if (t < 0) {
      reject(new Error("Wait time must be a positive number"));
    } else {
      setTimeout(function () {
        resolve();
      }, 1000 * t);
    }
  });
  return promise;
}

function calculateTime(t1, t2, t3) {
  let startTime = Date.now();

  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      const endTime = Date.now();
      const timeRequired = endTime - startTime;
      console.log(timeRequired);
      return timeRequired;
    })
    .catch((err) => {
      console.error("Error occured", err.message);
      throw err;
    });
}

calculateTime(1, 2, 1);

module.exports = calculateTime;
