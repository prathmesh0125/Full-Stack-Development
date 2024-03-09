import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [idset, setID] = useState(1);
  // console.log(idset);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setID(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setID(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setID(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setID(4);
          }}
        >
          4
        </button>
      </div>
        <Todo id={idset} />
    </>
  );
}
function Todo({ id }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos?id=" + id)
      .then(async (res) => {
        const data = await res.json();
        setTodos(data.todos);
      })
      .catch((err) => {
        console.log("something is wrong");
      });
  }, [id]);

  // Filter the todo with the matching id
  const todo = todos.find((todo) => todo.id === id);

  return (
    <div>
      <p>Id: {id}</p>
      {todo ? (
        <>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default App;
