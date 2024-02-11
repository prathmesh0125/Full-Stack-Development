
// .then syntax
// function getdata(){
//   fetch("https://fakerapi.it/api/v1/persons").then(function(response){
//     response.json().then(function(finaldata){
//       console.log(finaldata)
//     })
//   })
// }

// async await syntax
async function getdata() {
  const response = await fetch("https://fakerapi.it/api/v1/persons");//by default it send a get req
  const data=await response.json();
  console.log(data);
}
