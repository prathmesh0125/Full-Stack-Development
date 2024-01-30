// .then
// function fetchfunc(){
//   fetch(`https://randomuser.me/api/`).then(function(raw){
//     return raw.json();
//   }).then(function(data){
//     console.log(data)
//   })
// }
// fetchfunc();

// async awiat
async function fetchfunc(){
 let raw= await fetch(`https://randomuser.me/api/`);
 let ans= await raw.json();
 console.log(ans);
}
fetchfunc();