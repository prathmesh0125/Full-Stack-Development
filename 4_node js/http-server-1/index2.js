const express = require("express");

function calculateSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans+=i;
  }
  return ans;
  // console.log(ans);
}
const app = express();
app.get("/", function(req, res) {
  const n = req.query.n;
  const ans = calculateSum(n);
  res.send(ans.toString());
});
// calculateSum(10);

app.listen(3001, function () {
  console.log("server is running");
});
