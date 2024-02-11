
// .then syntax
// function getdata(){
//   fetch("https://fakerapi.it/api/v1/persons").then(function(response){
//     response.json().then(function(finaldata){
//       console.log(finaldata)
//     })
//   })
// }

const { json } = require("body-parser");

// async await syntax
async function getdata() {
  const response = await fetch("https://fakerapi.it/api/v1/persons");//by default it send a get req
  const finaldata=await response.json();
  console.log(finaldata);
  document.getElementById("container").innerHTML=JSON.stringify(finaldata.data);
}
