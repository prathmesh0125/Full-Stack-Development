import React, { Suspense, useContext, useState } from "react";
// import  Dashboard  from "./component/Dashboard";
// import  Landing  from "./component/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import { CountContext } from "./component/Context";
const Dashboard = React.lazy(() => import("./component/Dashboard"));
const Landing = React.lazy(() => import("./component/Landing"));
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/Dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>} />
        </Routes>
      </BrowserRouter> */}

      {/* // props drilling */}
      {/* <Count count={count}></Count>
      <Buttons count={count} setCount={setCount}></Buttons> */}
      {/* contextAPi */}
      <CountContext.Provider value={count} >
        <Count  setCount={setCount}></Count>
      </CountContext.Provider>
    </div>
  );
};

function Count({ setCount }) {
  return (
    <div>
      <CountRender />
      <Buttons setCount={setCount}></Buttons>
    </div>
  );
}
function CountRender() {
  let count = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons({  setCount }) {
  let count=useContext(CountContext)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Increase</button>
      <button onClick={() => setCount(count - 1)}> Decrease</button>
    </div>
  );
}
export default App;
