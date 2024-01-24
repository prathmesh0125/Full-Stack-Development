// unshift -for adding element from first
function shiftelment(arr,element) {
  console.log("prevous", arr);
  arr.shift(element);
  console.log("after shift", arr);
}
let arr=[1,2,3,4];
shiftelment(arr,0);