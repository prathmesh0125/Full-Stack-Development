// axios vs fetch
// .then syntax
function main() {
  fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
    const json = await res.json();
    console.log(json);
    console.log(json.todos.length);
  });
}
main();

// async await syntax

async function main2(){
  const response=await fetch("https://sum-server.100xdevs.com/todos",{
    method:"post",
    body:{
      username: "prathmesh",
      password: "1234567",
    },
    headers: {
      Authorization: "Bearer 123",
    },
  });
  const json=await response.json();
  console.log(json)
}

main2();