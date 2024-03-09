import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = 0;
  for (let i = 1; i <= inputValue; i++) {
    count = count + i;
  }

  return (
    <div>
     
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value))}
      />
      <p>Sum from 1 to n: {count}</p>
      <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
    </div>
  );
};

export default App;
