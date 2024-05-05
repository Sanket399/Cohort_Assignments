// ## File cleaner

// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function cleanfile(filePath, callback) {
  readFile(filePath, function (err, data) {
    if (err) {
      callback("Error", err);
      return;
    }
    let newData = data.replace(/\s+/g, " ");
    writeFile(filePath, newData, callback);
  });
}

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      callback("Error reading file", err);
      return;
    }
    callback(null, data);
  });
}

function writeFile(filePath, data, callback) {
  fs.writeFile(filePath, data, function (err) {
    if (err) {
      callback("Error writing file", err);
      return;
    }
    callback(null);
    console.log("File written");
  });
}

cleanfile("file.txt", function (err) {
  if (err) {
    console.error("Error cleaning file", err);
    return;
  }
  console.log("File cleaned");
});
