/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  let promise = new Promise(function (resolve, reject) {
    if (milliseconds < 0) {
      reject(new Error("Invalid input"));
    } else {
      setTimeout(function () {
        resolve();
      }, milliseconds);
    }
  });
  return promise;
}

module.exports = sleep;
