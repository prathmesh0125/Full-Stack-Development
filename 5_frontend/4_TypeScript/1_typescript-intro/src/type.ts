type user={
  name:string;
  lastname:string;
  age:number;

}
interface user2 {
  name:string;
  lastname:string;
  age:number;
}
function  greets(users:user){
  console.log('hello')
}
greets({
  name:"hi",
  lastname:"hellp",
  age:20,
})
