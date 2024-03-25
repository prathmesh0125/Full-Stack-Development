function runAfter(fn :()=>void){
setTimeout(fn,2000);
}
runAfter(function(){
  console.log("hi there")
})