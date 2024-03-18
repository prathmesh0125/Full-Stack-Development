import React, { useEffect } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notification,  totalnotificationcount } from "./Atom";
import AIPage from "./AiPage";
import axios from "axios";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
      {/* <AIPage></AIPage> */}
    </>
  );
}
function MainApp() {
  const [networkCount,setNetworkcount]=useRecoilState(notification)
  const totalnotification=useRecoilValue(totalnotificationcount)
 
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <button>Home</button>
      <button>
        My network (
        {networkCount.network >= 100 ? "99+" :networkCount.network  })
      </button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notification ({networkCount.notifications})</button>
      <button>Me {totalnotification}</button>
     
    </div>
  );
}

export default App;
