import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import ProtectedRouter from "./ProtectedRouter";
import MainDashbord from "../auth/MainDashbord";
import DashboardPage from "./DashboardPage";
import About from "./About";
import Contact from "./Contact";

const AdminRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<LoginPage />} />

        <Route element={<ProtectedRouter />}>
          <Route path="/admin" element={<MainDashbord />}>
            <Route index element={<DashboardPage />} />

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AdminRouter;
