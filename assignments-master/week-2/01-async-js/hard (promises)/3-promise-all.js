/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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

  const promises = [wait1(t1), wait2(t2), wait3(t3)];

  return Promise.all(promises).then(() => {
    const endTime = Date.now();
    const timeRequired = endTime - startTime;
    console.log(timeRequired);
    return timeRequired;
  });
}

calculateTime(5, 6, 3);

module.exports = calculateTime;
