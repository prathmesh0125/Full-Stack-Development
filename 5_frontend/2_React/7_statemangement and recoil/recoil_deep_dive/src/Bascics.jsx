import React, { useMemo } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobAtom, messaginAtom, networkAtom, notificationAtom, totalnotificationcount } from "./Atom";
import AIPage from "./AiPage";

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
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobcount = useRecoilValue(jobAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const [messagincount, setmessageCount] = useRecoilState(messaginAtom);
  // const totalnotification = useMemo(() => {
  // return  networkNotificationCount + jobcount + notificationCount + messagincount;
  // }, [networkNotificationCount, jobcount, notificationCount, messagincount]);
  // or
  const totalnotification=useRecoilValue(totalnotificationcount)
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <button>Home</button>
      <button>
        My network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobcount})</button>
      <button>Messaging ({messagincount})</button>
      <button>Notification ({notificationCount})</button>
      <button>Me {totalnotification}</button>
      <button onClick={() => setmessageCount(messagincount + 1)}>
        IncreaseMsg
      </button>
    </div>
  );
}

export default App;
