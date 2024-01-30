// promises
function myOwnsetTimout(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("helllllo");
    },duration);
  });
}
// 1
// myOwnsetTimout(1000).then(function () {
//   console.log("hi");
// });
// async await
function print(data) {
  console.log(data);
}
async function main() {
  let ans = await myOwnsetTimout(1000);
  print(ans);
}
main();
