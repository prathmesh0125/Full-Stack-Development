// filtering
// given an input arrau return all even value;

// 1 solution
// function evenValue(arr){
//   let newarr=[];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//       newarr.push(arr[i]);
//     }
//   }
//   return newarr;
// }

// 2 solution

const arr=[1,2,3,4,5];
// let ans=evenValue(arr);
// console.log(ans)

function filerlogic(n){
  if(n%2==0) return true;
  else return false;
}
const ans=arr.filter(filerlogic);
console.log(ans);