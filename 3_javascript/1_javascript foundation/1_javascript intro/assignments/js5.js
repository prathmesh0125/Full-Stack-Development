/*Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000*/
function sum1to100(n) {
  let day = new Date();
  let start = day.getTime();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  let end = day.getTime();
  let totalTime = end - start;
  return totalTime;
}

function sum1to100000(n) {
  let day = new Date();
  let start = day.getTime();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  let end = day.getTime();
  let totalTime = end - start;
  return totalTime;
}

function sum1to1000000000(n) {
  let day = new Date();
  let start = day.getTime();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  let end = day.getTime();
  let totalTime = end - start;
  return totalTime;
}

function calculateTime() {
  let t1 = sum1to100(100);
  console.log("Time taken for sum1to100:", t1, "milliseconds");

  let t2 = sum1to100000(100000);
  console.log("Time taken for sum1to100000:", t2, "milliseconds");

  let t3 = sum1to1000000000(1000000000);
  console.log("Time taken for sum1to1000000000:", t3, "milliseconds");
}

calculateTime();
