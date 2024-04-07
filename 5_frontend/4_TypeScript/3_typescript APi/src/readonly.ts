type Userr={
  name:string;
  age:number;
}

const userr:Readonly<Userr>={
name:'josh',
age:21
}
userr.age=23;