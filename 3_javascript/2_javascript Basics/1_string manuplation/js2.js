// index of word
function findindex(str, target) {
  console.log("orignal string:", str);
  console.log("index of string: ", str.indexOf(target));
}
findindex("hello world", "world");
// it teo many same word till indexOf  gives you first index
// but if you want last index then
function findLastindex(str, target) {
  console.log("orignal string", str);
  console.log("index of string: ", str.lastIndexOf(target));
}
findLastindex("ha ha ha ha", "ha");
