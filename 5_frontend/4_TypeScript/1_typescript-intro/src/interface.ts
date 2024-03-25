interface User {
  firstname: string;
  lastname?: string;
  age: number;
}
function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else return false;
}
let ans=isLegal({
  firstname:"prathemesh",
  // lastname:"bidve",
  age:21
  
})

console.log("ans "+ans)