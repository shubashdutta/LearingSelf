import React, { useState } from "react";
import { SidebarContanier } from "./SideBarContainer";
import DashboardPage from "./DashboardPage";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const sideBarData = SidebarContanier();

  const recorderItem = [sideBarData[0], ...sideBarData.slice(1)];
  const [active, setActive] = useState(recorderItem[0]?.id);

  const toggle = (id) => {
    setActive(id);
  };

  return (
    <div className="main-div overflow-y-auto-side ">
      <ul>
        {recorderItem.map((v) => (
          <NavLink
            to={v?.link}
            className={` flex `}
            key={v?.id}
            onClick={() => toggle(v?.id)}
          >
            {v?.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
