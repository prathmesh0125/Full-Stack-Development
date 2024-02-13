const express = require("express");
const app = express();

app.use(express.json());
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/user_app")
  .then(() => console.log("Connected!"));
const User = mongoose.model("users", {
  name:String,
  email:String,
  password:String,
});
const user = new User({
  name: "prathmesh Bidve",
  email: "abc@123",
  password: "32123",
});
user.save();
