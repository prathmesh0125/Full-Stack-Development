 function a(){
   return  new Promise((resolve, reject) => {
    resolve("hi")
  })
}
function ondone(data){
  console.log(data)
}


async function main(){
  let ans=await a();
  ondone(ans);
}
main();