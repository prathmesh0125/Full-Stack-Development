// call back expmale2
function arithmeticOperation(a, b, operation) {
  // simpal operation
  /* 
  if (operation == "sum") {
    const ans = sum(a, b);
    return ans;
  } else if (operation == "minus") {
    const ans = sub(a, b);
    return ans;
  }
  */
  //  call backarithmeticOperation
  const ans = operation(a, b);
  return ans;
}
function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

let result = arithmeticOperation(2, 3, sum);
console.log(result);
