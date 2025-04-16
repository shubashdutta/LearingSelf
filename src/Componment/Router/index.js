import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./AdminRouter";
import LoginPage from "../Common/Page/LoginPage";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/super-Admin/login" element={<LoginPage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        {AdminRouter()}
      </Routes>
    </Router>
  );
};

export default Index;
