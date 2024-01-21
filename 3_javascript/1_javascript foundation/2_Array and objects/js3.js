// objects -->it is a refrance type,it store in memorey  like array
// arrrays are good but not sufficant
// for real world data
// objects store key value pairs
// ----> objects don't have index  <----

// how to create objects
const person = {
  name: "prathmesh",//in javascript key is allerady in string
  // "name":"prathmesh",//this way also we write
  age: 20,
  role: "sde",
  hobbies: ["chess ", "bike riding", "swiming"],
};
console.log(person);
console.log(typeof person);




// how to access data from objects

console.log(person.name);//first way to aceses object
console.log(person["name"]);//second way to acces object
console.log(person.age);
console.log(person.hobbies); //we treat this array like a normal

// doing some normal array activety
// let a = person.hobbies;
// a.push("card");
// console.log(a.length);

// how to add key value pairs to objects

person.gende="male";
person["salary"]="30000";//also this way we add
person["gender"]="male";
person["college"]="msbecl";
console.log(person);

// objects inside array
// very useful in real world application
const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "prathmesh", gender: "male" },
  { userId: 3, firstName: "Abhay", gender: "male" },
];
console.log (users);


// ittrating  ofobjects inside array
// firstway of forloop
for(let i=0;i<users.length;i++){
    console.log(users[i]);
    // console.log(users[i].userId);//only acceses  the user id
}

// second way for of loop
for(let us of users){
    console.log(us.userId)
    console.log(us.firstName)
} 