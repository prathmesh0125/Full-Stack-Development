// findlargest
console.log("jo")
function findLargest(arr) {
  let large = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (large < arr[i]) large = arr[i];
  }
  return large;
}

let arr = [1, 2, 4, 1, 4, 2, 432, 33];
console.log(findLargest(arr));
