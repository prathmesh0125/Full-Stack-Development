// self tried example of call back
function calculte(a,b,opearation){
  const ans =opearation(a,b);
  return ans;
}
function mul(a,b){
  return a*b;
}
function div(a,b){
  return a/b;
}

let ans=calculte(4,5,mul);
console.log(ans);
