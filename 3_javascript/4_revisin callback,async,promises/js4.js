const fs = require("fs");

function putcopyRighttoFile(cb) {
  fs.readFile("hello.txt", "utf-8", function (err, data) {
    data = data + " copyRight 2020";
    fs.writeFile("hello.txt",data, function (err,data) {
      cb();
    });
  });
}
putcopyRighttoFile(function () {
  console.log("copyright has bee put");
});
console.log("hi");
