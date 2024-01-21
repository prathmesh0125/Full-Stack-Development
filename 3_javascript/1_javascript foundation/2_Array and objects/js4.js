// write a program that print all the male people's name fiven a complex object
const people = [
  {
    firsName: "prathmesh",
    gender: "male",
  },
  {
    firsName: "nagato",
    gender: "male",
    metadata:{
      postion:"leader of the akutsaki",
      anotherName:"pain",
    }
  },
  {
    firsName: "sunade",
    gender: "female",
  },
];
for(let i=0;i<people.length;i++){
  if(people[i]["gender"]=="male"){
    console.log(people[i].firsName.metadata);
  }
}
