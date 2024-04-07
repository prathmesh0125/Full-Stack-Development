interface User{
  name:string;
  age:number;
}

function sumofAge(user1:User,user2:User){
  return user1.age+user2.age;
}
const age=sumofAge(
  { name:"madara",age:28},
  {name:"itachi",age:23}

);
console.log(age);