function array(arr:number[]){
  let maxvalue=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>maxvalue){
      maxvalue=arr[i]
    }
  }
  return maxvalue;
}
const a=array([1,2,3,4]);
console.log("ans is "+ a);
