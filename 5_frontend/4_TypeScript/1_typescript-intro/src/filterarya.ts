interface fil {
	fname: string;
	lname: string;
	age: number;
}

function filteredUsers(users: fil[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
  fname: "harkirat",
  lname: "Singh",
    age: 21
}, {
  fname: "Raman",
  lname: "Singh",
    age: 16
}, ]));