// callback
function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
function operation(a,b, callback) {
  let a1 = callback(a);
  let a2 = callback(b);
  let ans = a1 + a2;
  console.log(ans);
}
operation(3,4, square);
