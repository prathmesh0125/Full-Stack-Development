function add(a,b){
  return a+b;
}
const a=((a,b)=>{
  return a+b;
})

let ab=add(1,2);
console.log(ab);
let ab1=a(4,2);
console.log(ab1);