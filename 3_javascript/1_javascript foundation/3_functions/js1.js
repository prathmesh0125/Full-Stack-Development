// function --it is worker in programming
// call===invoke===run --->same meaning
// principal of programming is "DRY" :- don't repeat yourself

// 1 to print HBD
function singHBD() {
  return("happy birthday to you...");
}
// singHBD();
// or
const q=singHBD();
// console.log(q)

// 2 Two plus Two

function tplust() {
  // console.log(2+2);
  return 2 + 2;
}

// we can store the value in another variable
// let returnValue=tplust();
// console.log(returnValue);

// console.log(tplust());

// 3 sum any number

function sum(a, b) {
  //a,b called parameters
  return a + b;
}
let ans = sum(3,4); //7,9 call arguments
// console.log(ans);

// 4 sum of three number
function sum3(a,b,c){
 return a+b+c;
}
let result=sum3(22,65,45);
// console.log(result);


// 5
// odd or even

// input: one number
// output:true or false

function iseven(number){
//   if(number%2===0){
//     // console.log("even");
//     return true
//   }
//  return false
// or
return number%2===0;
}
// console.log(iseven(7));


// 6
// input:string 
// output:firstcharter
function firstchar(string){
  // return string[string.length-1];
  return string[0]
}
console.log(firstchar("prathmesh"));

// 7 function
// input:array,target(number)
// output:index of target if target present in array

// function findtarget(array,target){
//   for(let i=0;i<array.length;i++){
//     if(array[i]===target){
//       return i
//     }
//   }
//     return -1
// }
// let b=findtarget([3,5,4,5,6],3);
// console.log(b)

function find(array1,key){
  for(let i=0;i<=array1.length;i++){
    if(array1[i]===key){
      return i;
    }

  }
  return -1;
}
console.log (find([12,2,4,5,6,6],7))

