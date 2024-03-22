import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MouseEvent from "./MouseEvent";
function useIsonline() {
  const [isonline, setIsonline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsonline(true);
    });
    window.addEventListener("offline", () => {
      setIsonline(true);
    });
  });
  return isonline;
}

const App = () => {
  //   const isOnline=useIsonline();
  //  if(isOnline){
  //   return "you are online yay!"
  //  }
  //  return "you are offline ,please connect to the internet"
  return (
    <MouseEvent/>
  )
};

export default App;
