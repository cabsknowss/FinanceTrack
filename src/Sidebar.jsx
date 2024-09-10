import React, { useState } from "react";
import logo from "./assets/images/logo.png";
import {
  Home,
  Input,
  BarChart,
  EditNote,
  Settings,
  HelpOutline,
} from "@mui/icons-material";

const Sidebar = (props) => {
  const { setActiveComponent, activeComponent } = props;

  const primaryNavlist = [
    { text: "Dashboard", icon: <Home /> },
    { text: "Records", icon: <Input /> },
    { text: "Chart", icon: <BarChart /> },
    { text: "Reflect", icon: <EditNote /> },
  ];

  const secondaryNavlist = [
    { text: "Settings", icon: <Settings /> },
    { text: "Guide", icon: <HelpOutline /> },
  ];

  return (
    <div className="sidebar">
      <div>
        <div
          onClick={() => window.location.reload(false)}
          className="sidebar-header"
        >
          <img src={logo} alt="logo" width="70px" />
          <h2 className=" | fw-semi-bold fs-500 opacity-800">FinanceTrack</h2>
        </div>
        <nav>
          <ul className="sidebar-nav">
            {primaryNavlist.map((navList, index) => (
              <li
                key={index}
                className={
                  activeComponent === navList.text
                    ? "sidebar-navlist__active sidebar-navlist"
                    : "sidebar-navlist"
                }
                onClick={() => setActiveComponent(navList.text)}
              >
                <div>{navList.icon}</div>
                <h2 className=" | fw-semi-bold text-neutral-700 fs-400">
                  {navList.text}
                </h2>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-top">
        {secondaryNavlist.map((navList, index) => (
          <div
            key={index}
            className={
              activeComponent === navList.text
                ? "sidebar-navlist__active sidebar-navlist"
                : "sidebar-navlist"
            }
            onClick={() => setActiveComponent(navList.text)}
          >
            <div>{navList.icon}</div>
            <h2 className=" | fw-semi-bold text-neutral-700 fs-400">
              {navList.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
