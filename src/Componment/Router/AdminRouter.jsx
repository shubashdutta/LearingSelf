import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRouter from "../Common/ProtectedRouter";
import MainDashbord from "../auth/MainDashbord";
import DashboardPage from "../Common/DashboardPage";
import About from "../Common/About";
import Contact from "../Common/Contact";

const AdminRouter = () => {
  return (
    <Route element={<ProtectedRouter />}>
      <Route path="/admin" element={<MainDashbord />}>
        <Route index element={<DashboardPage />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  );
};

export default AdminRouter;
