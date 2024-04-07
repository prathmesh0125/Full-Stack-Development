"use strict";
function sumofAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofAge({ name: "madara", age: 28 }, { name: "itachi", age: 23 });
console.log(age);
