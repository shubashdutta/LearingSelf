import React, { useContext } from "react";
import Sidebar from "../Common/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const MainDashbord = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <>
      <header>
        <div className="img">
          <img
            src="https://roadsewa.com/static/media/HomePageLogo.41f1dac8465e88b34fdb.png"
            alt="Logo"
          />
        </div>
        <div>My Profile</div>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div className="layout">
        <Sidebar />
        <section className="content">
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default MainDashbord;
