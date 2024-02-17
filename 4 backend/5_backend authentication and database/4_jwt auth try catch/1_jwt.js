// const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "1234556";
// const app = express();
// app.use(express.json());

const checkbook = 
  {
    username: "xyz@123",
    accountNumber: "293482123",
    name: "Madara uchiha",
  }


const token = jwt.sign(checkbook, jwtpassword);
console.log(token);   


const verified=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inh5ekAxMjMiLCJhY2NvdW50TnVtYmVyIjoiMjkzNDgyMTIzIiwibmFtZSI6Ik1hZGFyYSB1Y2hpaGEiLCJpYXQiOjE3MDgxMzAyMDl9.tdk4DQL2Aez0Z__W2W5TBd6csi_4UyQbr2uzvETnzGI",jwtpassword)
console.log(verified)

