const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const Port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.status(401).send("<b> hello node js <b>");
  // console.log("hi");
});
app.get("/data", function (req, res) {
  res.json({
    name: "madara",
    post: "ghost of uchiha",
  });
});
app.post("/conver", (req, res) => {
  // console.log(req.headers["authorization"])
  // console.log(req.body)
  const msg=req.query.msg;
  console.log(msg)
  res.send({
    msg: "hello how are you ?",
  });
});

app.listen(Port, function (req, res) {
  console.log(`sever is running on ${Port} port`);
});
