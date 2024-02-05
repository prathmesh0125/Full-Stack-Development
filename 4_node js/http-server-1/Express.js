const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
// kidney status
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const totalKidneys = johnKidneys.length;
  let numberofhealthykidenys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberofhealthykidenys = numberofhealthykidenys + 1;
    }
  }
  const numberofunhealthykidneys = totalKidneys - numberofhealthykidenys;
  res.json({
    totalKidneys,
    numberofhealthykidenys,
    numberofunhealthykidneys,
  });
  // console.log(totalKidneys);
});
// add new kidney
app.post("/", function (req, res) {
  const ishealty = req.body.ishealty;
  users[0].kidneys.push({
    healthy: ishealty,
  });
  res.json({
    msg: "done",
  });
});
// replace the kidney
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "replacement is done",
  });
});
app.listen(3001, function (req, res) {
  console.log("server is running on 3001 port");
});
