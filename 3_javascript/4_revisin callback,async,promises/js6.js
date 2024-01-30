// callback hell
setTimeout(function () {
  console.log("setTimout1");
  setTimeout(function () {
    console.log("setTimout2");
    setTimeout(function () {
      console.log("setTimout3");
    },4000);
  }, 2000);
}, 1000);


