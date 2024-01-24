// json->javascript object notation
// object
// when we want to send data ,we send json format

// JSON is a format for data exchange, easy for humans and machines. It represents data as key-value pairs, simalar to JavaScript objects
const users='{  "name":"prathmesh", "age":21,  "gender":"male"}'
console.log(users["name"]);
// these have function 
// json.parse
// json.stringify
// 1. JSON.parse transforms JSON strings into JavaScript objects, crucial for handling data sent between servers and clients or stored in sources.
const user=JSON.parse(users);
console.log(user);
console.log(user["name"]);


