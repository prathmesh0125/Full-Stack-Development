// slice : The slice method is used to create a new string or array by extracting a portion of the original string or array.

function getslice(str, start, end) {
  console.log(str.slice(start, end));
}
// getslice("nagato uzumaki",0,8);
// it doen't include last index like "<end"
// or
// console.log("madara".slice(0,3));

function customSlice(str, start, end) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= start && i < end) {
      ans += str[i];
    }
  }
  return ans;
}

console.log("js slice", "madara".slice(0, 3));
let ans = customSlice("madara", 0, 3);
console.log("my own slice:", ans);
