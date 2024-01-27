const fs = require("fs");
function readfile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}
function done(data) {
  console.log(data);
}
readfile().then(done);
