function after1s(cb:()=>void){
setTimeout(cb,1000)
}
after1s(()=>{
  console.log("hi")
})
