// The trim method in JavaScript is used to remove extra spaces from the beginning and end of a string. It helps in cleaning up a string by eliminating leading and trailing spaces.
// Here's a simple example:

function trimString(str) {
  console.log("orignal string", str);
  console.log("trim string", str.trim());
  // str.trim();
}
trimString("   hello world  ")
// not trim middle
