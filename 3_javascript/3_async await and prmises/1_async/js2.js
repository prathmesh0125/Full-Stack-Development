const fs=require("fs");

// fs.readFile //this an async call
fs.readFile("hello.txt","utf-8",function(err,data){
  console.log(data);
  // try{
    // console.log(data);

  // }
  // catch(err){
  //   console.log(err);
  // }
})
console.log("hi")
let a=0;
for(let i=0;i<1000000000;i++){
  a++;
}
console.log("hi there")//after this happens thread goes two remaing callback
