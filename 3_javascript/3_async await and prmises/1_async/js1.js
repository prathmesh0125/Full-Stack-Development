function findSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

function find100Sum() {
  console.log(findSum(100));
}

function syncsleep() {
  let ans = 0;
  for (let i = 0; i < 100000000; i++) {
    ans += i;
  }
  console.log(ans);
}
syncsleep();
// setTimeout(find100Sum,1000);//async function
console.log("hello world");
//callback function 1.setTimeout 2.fs.readFile 3fetch