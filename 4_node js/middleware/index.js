// regular code which used to check a input without using middleware
const express = require("express");
const app = express();
app.get("/health-checkup", function (req, res) {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username !== "prathmesh" || password !== "pass") {
    res.status(408).json({
      msg: "something up with yo inputs",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId !=2) {
    res.status(408).json({
      msg: "something up with your inputs",
    });
    return;
  }

  res.status(200).json({
    msg: "your kidney is fine ",
  }); 
});

app.listen(3000, (req, res) => {
  console.log("server is running");
});
