function checNumber() {
  return new Promise((resolve, reject) => {
    var ans = Math.floor(Math.random() * 10);
    if (ans < 5) {
      resolve(`number is below 5: ${ans}`);
    } else {
      reject(`number is above 5: ${ans}`);
    }
  });
}
function onDone(data) {
  console.log(data);
}
checNumber().then(onDone).catch(onDone);
