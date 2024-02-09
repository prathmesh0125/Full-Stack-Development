const express = require("express");
const app = express();
app.use(express.json());
const zod = require("zod");

const schema = zod.array(zod.number());

// authentication with zod
// our input is only array and we have to valid the input
app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;

  const response=schema.safeParse(kidneys);

  res.send(response)

  // const kidneyLength = kidneys.length;
  // // console.table(kidneys);
  // res.send("kidneys lenght " + kidneyLength);
});
// global cache
app.use(function (err, req, res, next) {
  res.json({
    msg: "somthing is wrong",
  });
});
app.listen(3000, (req, res) => {
  console.log("server is running on 3000");
});
