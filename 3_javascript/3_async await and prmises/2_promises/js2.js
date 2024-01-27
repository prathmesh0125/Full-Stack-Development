function example2() {
  return new Promise(function (resolve) {
    resolve("hello");
  });
}
function usepromise(d){
  console.log(d);
}
example2().then(usepromise)
console.log("djn")


