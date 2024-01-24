// unshift -for adding element from first
function unshiftElement(arr,element) {
  console.log("prevous", arr);
  arr.unshift(element);
  console.log("after shift", arr);
}
let arr=[1,2,3,4];
unshiftElement(arr,0);