import React, { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) => {
          const data = await res.json();
          setTodos(data.todos);
        })
        .catch((error) => console.error("Error fetching todos:", error));
    }, 10000);
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <h3>{todo.completed}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
