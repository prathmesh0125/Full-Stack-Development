const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "1234556";

const app = express();
app.use(express.json());
const all_users = [
  {
    username: "xyz@123",
    password: "123",
    name: "Madara uchiha",
  },
  {
    username: "itachi@123",
    password: "12345",
    name: "itachi uchiha",
  },
  {
    username: "nagato@123",
    password: "123456",
    name: "Nagato",
  },
];

function userExists(username, password) {
  let ans = false;
  for (let i = 0; i < all_users.length; i++) {
    if (
      all_users[i].username === username &&
      all_users[i].password === password
    ) {
      ans = true;
    }
  }
  return ans;
}
// function userExists(username, password) {
//   return all_users.find(user => user.username === username && user.password === password) !== undefined;
// }

// function userExists(username, password) {
//   return all_users.map(user => user.username === username && user.password === password).includes(true);
// }

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "user doesn't exists in our database",
    });
  }
  var token = jwt.sign({ username: username }, jwtpassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtpassword);
    const username = decoded.username;
    res.json({
      users: all_users.filter(function (val) {
        if (val.username === username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (error) {
    return res.status(403).json({
      msg: "invalid token",
    });
  }
});
app.listen(3000, (req, res) => {
  console.log("server is running on 3000 port");
});
