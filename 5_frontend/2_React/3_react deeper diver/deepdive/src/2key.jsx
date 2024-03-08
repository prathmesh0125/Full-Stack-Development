import React, { useState } from "react";

let counter=4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym 6 am",
    },
    {
      id: 2,

      title: "eat food",
      description: "eat food 9 am",
    },
    {
      id: 3,
      title: "go to class",
      description: "got to class 10 am",
    },
  ]);
  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}
export default App;
