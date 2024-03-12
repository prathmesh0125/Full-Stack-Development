import React from "react";
import { useCallback } from "react";
import { memo } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const logsomthing = useCallback(function () {
    console.log("hi");
  }, []);
  return (
    <div>
      <ButtonComponent inputvalue={logsomthing} />
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
};
const ButtonComponent = memo(function () {
  return (
    <div>
      <button>Click Me</button>
    </div>
  );
});

export default App;
