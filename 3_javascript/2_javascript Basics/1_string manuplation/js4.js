// string replacement
function stringReplacement(str, target, replacement) {
  console.log("orignal string", str);
  console.log("replced string", str.replace(target, replacement));
}
stringReplacement("hello js","js","javascript")
// or
console.log("hello js".replace("js","javascript"))
