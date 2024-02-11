const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const fs = require("fs");
app.use(bodyparser.json());

// we create async middleware

// async function readfile(req, res, next) {
//   let data = await fs.readFile("a.txt", "utf-8", function (err, data) { res.send(data)});
 
//   next();
// }

// app.get("/read", readfile, (req, res) => {
// });
app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  console.table(kidneys);
  // const kidneyLength = kidneys.length;
  res.send("kidneys lenght " + kidneyLength);
});

app.use(function (err, req, res, next) {
  res.json({
    msg: "somthing is wrong",
  });
});
app.listen(3000, (req, res) => {
  console.log("server is running on 3000");
});
