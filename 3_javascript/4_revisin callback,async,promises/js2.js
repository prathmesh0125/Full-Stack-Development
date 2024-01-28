// reading file
const fs = require('fs');
fs.readFile("hello.txt","utf-8",function(err,data){
  // console.log(err)
  console.log(data)
})
console.log('hello world')