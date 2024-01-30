
function putcopyRighttoFile(cb) {
  setTimeout(function () {
    console.log("setTimout1");
    setTimeout(function () {
      console.log("setTimout2");
      cb();
    }, 2000);
  }, 1000);
}
putcopyRighttoFile(function () {
  console.log("copyright has bee put");
});
console.log("hi");
