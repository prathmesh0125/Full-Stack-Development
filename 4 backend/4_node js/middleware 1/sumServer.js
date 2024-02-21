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
// intrest 
app.get("/intrest",(req,res)=>{
  const principle=parseInt(req.body.principle);
  const intrest=parseInt(req.body.intrest);
  const time=parseInt(req.body.time);
  let totalintrest=(principle*intrest*time)/100;
  let totalvalue=principle+totalintrest;
res.json({
  "total":totalvalue,
  "intrest":totalintrest
})
})
app.get("/hi",(req,res)=>{
  res.send("hi")
})

app.listen(3000, () => {
  console.log("server is running on 300 port");
});
