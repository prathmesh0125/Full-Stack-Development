import React, { Suspense } from "react";
// import  Dashboard  from "./component/Dashboard";
// import  Landing  from "./component/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
const Dashboard = React.lazy(()=>import("./component/Dashboard"))
const Landing = React.lazy(()=>import("./component/Landing"))
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/Dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>} />
          {/* <Route path="/" element={<Landing />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
