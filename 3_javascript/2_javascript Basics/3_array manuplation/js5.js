// concat array
// 1
const arr1 = [1, 2, 3, 5];
const arr2 = [4, 5, 6, 7];
console.log(arr1.concat(arr2));
for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}
console.log(arr1);
