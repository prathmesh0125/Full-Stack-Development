// is palindrome
function isPAlindrome(str) {
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let reverse = cleanStr.split("").reverse().join("");

  return cleanStr === reverse;
}

let str = "A man a plan a canal Panama";
let ans = isPAlindrome(str);
console.log(ans);
