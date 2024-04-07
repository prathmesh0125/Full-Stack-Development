interface User2 {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type userProfiles=Pick<User1,'name'|'age'|'email'>

type optionaluser=Partial<userProfiles>
function updateusers(user:optionaluser){
  console.log(`${user.name},${user.email}`);
}

updateusers({name:"madara",email:"bidve@123"});