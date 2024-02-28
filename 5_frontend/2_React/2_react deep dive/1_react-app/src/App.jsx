import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      desc: "go to gym at 6 AM",
      completed: true,
    },
    {
      title: "go to school",
      desc: "go to scool at 9:30 AM",
      completed: true,
    },
  ]);

  function addTodo() {
    setTodos([...todos, {
      title: "new todo",
      desc: "new desc",
    }]);
  }

  return (
    <>
      {/* <Todo title={todos[0].title} desc={todos[0].desc} />
  <Todo title={todos[1].title} desc={todos[1].desc} /> */}
  <button onClick={addTodo}> add random todos</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} desc={todo.desc} />;
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
  );
}

export default App;
