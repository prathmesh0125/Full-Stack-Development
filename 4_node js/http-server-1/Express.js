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
  const ishealty = req.body.isheatly;
  users[0].kidneys.push({
    healthy: ishealty,
  });
  res.send({
    msg: "done",
  });
});
// replace the kidney
app.put("/", function (req, res) {
  if (istheratleastoneunhealthykidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      msg: "replacement is done",
    });
  } else {
    res.status(411).json({
      msg: "no need of replacement",
    });
  }
});
// remove unhealthy kidney
app.delete("/", function (req, res) {
  if (istheratleastoneunhealthykidney()) {
    const newarray = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newarray.push({ healthy: true });
      }
    }
    users[0].kidneys = newarray;
    res.send({
      msg: "removed unhealthy kidney",
    });
  } else {
    res.status(411).json({
      msg: "you dont't any bad kidney",
    });
  }
});

function istheratleastoneunhealthykidney() {
  let atleastoneunhealthykidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastoneunhealthykidney = true;
    }
  }
  return atleastoneunhealthykidney;
}

app.listen(3001, function (req, res) {
  console.log("server is running on 3001 port");
});
