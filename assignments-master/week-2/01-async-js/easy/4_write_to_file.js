//  Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("a.txt", "update", function (err) {
  if (err) {
    console.error("Error", err);
    return;
  }
  console.log("File written");
});

readFile("a.txt");

fs.appendFile("a.txt", " appended data", function (err) {
  if (err) {
    console.error("error", err);
    return;
  }
  console.log("Data appended to file");
});

readFile("a.txt");

function readFile(filePath) {
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      console.error("Error", err);
      return;
    }
    console.log(data);
  });
}
