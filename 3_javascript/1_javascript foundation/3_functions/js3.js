// callback-passing function as an argument

function sum(num1,num2,callfun){
  let result=num1+num2;
  // return result;
  callfun(result);
}
function displayResult(data){
  console.log("result of the sum is : "+ data );
}
function displayResultpassive(data){
  console.log("sum result is : "+ data );
}
// condtions
// allowed  only one  function call this
// how wiil you displayresult of sum
// approch
// 1 - but two call 
// let result=sum(3,2);
// displayResult(result);
// 2
sum(5,2,displayResult);
