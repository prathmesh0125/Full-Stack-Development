interface User1 {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type userProfile=Pick<User1,'name'|'age'|'email'>

function updateuser(user:userProfile){
  console.log(`${user.age},${user.email}`);
}

updateuser({name:"madara",age:23,email:"bidve@123"});