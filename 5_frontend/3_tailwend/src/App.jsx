import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Revenue } from "./component/Revenue";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-3">
   <Revenue title={"Amount Pending"} amounts={"92,312.20"} ordercount={13}/>
    </div>
  );
}

export default App;
