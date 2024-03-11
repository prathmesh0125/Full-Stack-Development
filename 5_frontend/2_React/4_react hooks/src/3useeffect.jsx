import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [finalvalue, setFinalvalue] = useState(0);
  useEffect(() => {
    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
      count = count + i;
    }
    setFinalvalue(count);
  },[inputValue]);

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value))}
      />
      <p>
        Sum from 1 to {inputValue}: {finalvalue}
      </p>
      <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
    </div>
  );
};

export default App;
