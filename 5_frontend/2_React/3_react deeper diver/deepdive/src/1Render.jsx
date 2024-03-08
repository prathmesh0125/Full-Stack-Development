import React, { useState } from "react";

function prevois() {
  const [title, setitle] = useState("harkirat");
  function getrandom() {
   setitle("My name is" + Math.random());
  }
  return (
    <div>
      <button onClick={getrandom}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="hello"></Header>
      <Header title="hello"></Header>
      <Header title="hello"></Header>
      <Header title="hello"></Header>
      <Header title="hello"></Header>
    </div>
  );
}

const Header = React.memo(function Header({ title }) {
  return <div> {title}</div>;
});
export default prevois;
