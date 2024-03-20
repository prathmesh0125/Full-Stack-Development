const axios = require("axios");

//  function main2(){
//   axios("https://sum-server.100xdevs.com/todos").then((result) => {
//     console.log(result.data)
//   })
// }
// async function main2(){
//   const response=await axios.get("https://sum-server.100xdevs.com/todos");
//   console.log(response.data)
// }
async function main2() {
  const response = await axios.post(
    "https://sum-server.100xdevs.com/todos",
    {
      username: "prathmesh",
      password: "1234567",
    },
    {
      headers: {
        Authorization: "Bearer 123",
      },
    }
  );
  console.log(response.data);
}

main2();
