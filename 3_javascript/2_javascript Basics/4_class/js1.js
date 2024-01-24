// object
// const dog={
//   name:"dog",
//   letcount:4,
//   speaks:"bhow bhow",

// }
// repeating the same logic
// const cat={
//   name:"cat",
//   letcount:4,
//   speaks:"meow meow",

// }

// it not good to create multilple ojec
// console.log("animal " +dog["name"]+" "+dog["speaks"])
// console.log("animal " +cat["name"]+" "+cat["speaks"])
// animal property are same  but we create multiple time ,so combining this we use class

class animal {
  constructor(name, legcount, speaks) {
    this.name = name;
    this.legcount = legcount;
    this.speaks=speaks;
  }
  static type(){
    console.log("Animal");
  }
  speak() {
    console.log("hi there " + this.speaks);
  }
}
let dog =new animal("dog",4,"bhow bhow");
let cat =new animal("cat",4,"Meow");
console.log(dog)
dog.speak();
 animal.type();
 animal.speak();
// static method we can directly call without creating an object