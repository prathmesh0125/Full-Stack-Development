const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/user_app")
  .then(() => console.log("Connected!"));
const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});
app.post("/create", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const existinguser = await User.findOne({ email: email });
  if (existinguser) {
    return res.status(400).send("user already exists");
  }
  const user = new User({
    name: name,
    email: email,
    password: password,
  });
  user.save();
  res.status(200).send("user is created ");
});
app.listen(3000, (req, res) => {
  console.log("server is running on 3000 port");
});
