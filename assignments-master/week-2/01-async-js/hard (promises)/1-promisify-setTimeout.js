/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let promise = new Promise(function (resolve, reject) {
    if (n < 0) {
      reject(new Error("Wait time must be a positive number"));
    } else {
      setTimeout(function () {
        resolve();
      }, 1000 * n);
    }
  });
  return promise;
}

wait(2)
  .then((n) => {
    console.log("Resolved");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = wait;
