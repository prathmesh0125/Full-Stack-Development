const express = require("express");
const app = express();

let count = 0;
function countrequest(req, res, next) {
  count++;
  next();
}

app.get("/check", countrequest, function (req, res) {
  res.send("hello");
});
app.get("/count", function (req, res) {
  // res.send(count);
  res.json({
    msg: count,
  });
});
app.listen(3000, function (req, res) {
  console.log("server is running on");
});
