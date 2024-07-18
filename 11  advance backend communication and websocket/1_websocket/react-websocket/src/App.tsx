import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg"; // Corrected the path for viteLogo
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessages, setLatestMessages] = useState<string[]>([]);
  const [message, setMessage] = useState(""); // Corrected the typo in setmeassage to setMessage
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("connected");
      setSocket(socket);
    };
    socket.onmessage = (msg) => {
      console.log("received msg", msg.data);
      setLatestMessages((m) => [...m, msg.data]);
    };
    return () => {
      socket.close();
    };
  }, []);

  const sendMsg = () => {
    if (message.trim() !== "") {
      // Check if the message is not empty
      socket?.send(message);
      setMessage(""); // Clear the input field after sending the message
    }
  };

  if (!socket) {
    return <>loading</>;
  }

  return (
    <div>
      <input
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        value={message} // Bind the input field value with the message state
      />
      <button onClick={sendMsg}>Send</button>
      <div>
        {latestMessages.map((message, index) => (
          <div style={{background:"grey"}} key={index}>
           <p></p> {message}
            
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
