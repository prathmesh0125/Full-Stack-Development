const express = require("express");
const app = express();

app.get("/sum", (req,res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const ans = a + b;
  res.json({
    msg: `sum = ${ans}`,
  });
});
app.get("/hi",(req,res)=>{
  res.send("hi")
})

app.listen(3000, () => {
  console.log("server is running on 300 port");
});
