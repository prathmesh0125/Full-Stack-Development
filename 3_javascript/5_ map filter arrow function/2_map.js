// given an array,give me back a new array in whi every value is multipied by 2
// 1 solution
const input = [1, 2, 3, 4, 5];
// const ans=[];
// for(let i=0;i<input.length;i++){
//   ans.push(input[i]*2);
// }
// console.log(ans)
// 2. soution
// const a = (i) => {
//   return i * 3;
// };
const ans = input.map((i) => {
  return i * 2;
});
console.log(ans);
