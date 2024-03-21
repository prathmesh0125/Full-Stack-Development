import axios from "axios";
import React, { useEffect, useState } from "react";
// custom hooks

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value=setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
    return ()=>{
      clearInterval(value)
    }
  }, [n]);
  return { todos, loading };
}
const App = () => {
  const { todos, loading } = useTodos([5]);
  return (
    <div>
      {loading
        ? "loading..."
        : todos.map((todo) => <Track key={todo.id} todo={todo} />)}
    </div>
  );
};
function Track({ todo }) {
  return (
    <div>
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
    </div>
  );
}

export default App;
