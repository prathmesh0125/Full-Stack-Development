const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailschema = zod.string().email();
const passwordschema = zod.string().min(6);

function signJwt(username, password) {
  const usernameresponse = emailschema.safeParse(username);
  const passwordres = passwordschema.safeParse(password);
  if (!usernameresponse.success || !passwordres.success) {
    return null;
  }
  const signature = jwt.sign({ username }, jwtPassword);
  return signature;
}
function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (error) {
    return false;
  }
}

function decodeJwt(token) {
  //   true or false
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

// const ans=signJwt("adfkds@gmail.com","1242134")
// console.log(ans);
// const decoderes = decodeJwt(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZmtkc0BnbWFpbC5jb20iLCJpYXQiOjE3MDgxMzQzMDd9.JMg8LUiEOCN6jPvlb3BQllPD8QHcG1zlM6BF-BDyNQU"
// );
// console.log(decoderes);

const verifiedres = verifyJwt(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZmtkc0BnbWFpbC5jb20iLCJpYXQiOjE3MDgxMzQzMDd9.JMg8LUiEOCN6jPvlb3BQllPD8QHcG1zlM6BF-BDyNQU"
);
console.log(verifiedres);
