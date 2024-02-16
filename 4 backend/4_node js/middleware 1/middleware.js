const express = require("express");
const app = express();

function ticketchekcker(req, res, next) {
  const ticket = req.query.ticket;
  if (ticket === "free") next();
  else {
    res.status(403).send("accses denied!");
  }
}

function isAge(req,res,next){
  const age=req.query.age;
  if(age<14){
    res.status(400).json({
      msg:"you are not eligible"
    })
  }
  else{
    next();
  }
}

app.use(ticketchekcker);
app.use(isAge)
app.get("/ride1", (req, res) => {
  res.send("you rode the first ride");
});
app.get("/ride2", (req, res) => {
  res.send("you rode the first ride");
});
app.get("/ride3", (req, res) => {
  res.send("you rode the first ride");
});
app.get("/ride4", (req, res) => {
  res.json({
    msg:"hello"
  })
});
app.listen(3000, (req, res) => {
  console.log("server is running on 3000 port");
});
