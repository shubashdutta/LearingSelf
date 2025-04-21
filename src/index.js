import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SetModal from "./Componment/context/SetModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Componment/Provider/AuthProvider";
import { SockProvider } from "./Componment/webStocket/SocketProvider/sockProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <SockProvider>
      <AuthProvider>
        <SetModal>
          <App />
        </SetModal>
      </AuthProvider>
    </SockProvider>
  </QueryClientProvider>
);
