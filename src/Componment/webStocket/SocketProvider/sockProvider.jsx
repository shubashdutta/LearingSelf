import { Client } from "@stomp/stompjs";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useCallback,
} from "react";
import SockJS from "sockjs-client";

const SockJSContext = createContext();

const SockProvider = ({ children }) => {
  const [message, setMessage] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const clientRef = useRef(null);

  const wsURL = process.env.REACT_APP_API_WEBSOCKET_URL;

  const SocketConnection = useCallback(() => {
    const socket = new SockJS(wsURL);

    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,

      onConnect: () => {
        console.log("🟢 STOMP connected");
        setIsConnected(true);

        stompClient.subscribe("/topic/notifications/web", (message) => {
          const body = JSON.parse(message.body);
          setMessage((prev) => [...prev, body]);
        });
      },

      onDisconnect: () => {
        console.log("🔴 STOMP disconnected");
        setIsConnected(false);
      },

      onStompError: (frame) => {
        console.error("💥 STOMP error:", frame);
      },
    });

    clientRef.current = stompClient;
    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, [wsURL]);

  useEffect(() => {
    SocketConnection();
    return () => {
      if (clientRef.current) {
        clientRef.current.deactivate();
      }
    };
  }, [SocketConnection]);

  return (
    <SockJSContext.Provider value={{ message, isConnected, clientRef }}>
      {children}
    </SockJSContext.Provider>
  );
};

export { SockJSContext, SockProvider };
