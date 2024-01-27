function example2() {
  return new Promise(function (resolve) {
    resolve("hello");
  });
}
function usepromise(d){
  console.log(d);
}

async function main(){
  // no callback,no .then
  let a=  await example2();
  usepromise(a);
  // console.log(a)
}

main();
// await is valid only async function

