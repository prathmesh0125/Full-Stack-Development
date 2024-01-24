// Array-diffrent opperation:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// push
function pushElement(arr, element) {
  console.log("prevous", arr);
  arr.push(element);
  console.log("after push", arr);
}
let arr=[1,2,3,4];
pushElement(arr,5);