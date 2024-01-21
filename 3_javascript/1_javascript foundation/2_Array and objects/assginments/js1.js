// largest number in array
const arr=[1,2,3,42,56,2,452,42];
let largest=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]>largest){
    largest=arr[i];
  }
}
console.log(largest);