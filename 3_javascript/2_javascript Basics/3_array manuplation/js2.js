// pop -for deleting element from last
function pushElement(arr) {
  console.log("prevous", arr);
  arr.pop();
  console.log("after push", arr);
}
let arr=[1,2,3,4];
pushElement(arr);