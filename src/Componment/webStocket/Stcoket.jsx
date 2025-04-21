import React, { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";

const WebSocketWithSockJS = () => {
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.current = new SockJS("http://192.168.1.87:8091/server");

    socket.current.onopen = () => {
      console.log("🟢 SockJS connected");
      setMessages((prev) => [...prev, "🟢 Connected to SockJS"]);
    };

    socket.current.onmessage = (e) => {
      console.log("📨 Message from server:", e.data);
      setMessages((prev) => [...prev, `📨 ${e.data}`]);
    };

    socket.current.onclose = () => {
      console.log("🔴 SockJS disconnected");
      setMessages((prev) => [...prev, "🔴 Disconnected from SockJS"]);
    };

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, []);

  return (
    <div>
      <h2>SockJS WebSocket Chat</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: 10,
          height: 200,
          overflowY: "scroll",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type message..."
      />
      {/* <button onClick={sendMessage}>Send</button> */}
    </div>
  );
};

export default WebSocketWithSockJS;
