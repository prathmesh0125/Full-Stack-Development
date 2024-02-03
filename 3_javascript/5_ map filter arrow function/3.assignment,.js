function mapi(arr, transoform) {
  let newar = [];
  for (let i = 0; i < arr.length; i++) {
    let a = transoform(arr[i]);
    newar.push(a);
  }
  return newar;
}
function transoform(i) {
  return i * 2;
}
let arr = [1, 2, 3, 4, 5];

let newarr=mapi(arr, transoform);
console.log(newarr);
