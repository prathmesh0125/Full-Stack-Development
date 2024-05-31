import express from "express"

const app=express();

let  reqcount=0;
app.use(function(req:any,res:any,next:any){
  reqcount++;
  next();
})

app.get("/",(req:any,res:any)=>{
  res.send("hello")
})

app.get("/reqcount",(req:any,res:any):any=>{
res.json({
  count:reqcount
})
})

app.listen(3000,function(){
  console.log("server is runnning on 300 port");
})