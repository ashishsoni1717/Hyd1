import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import Logo from "../../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
// import { SidebarData } from "../Data/Data";
//import { UilBars } from "@iconscout/react-unicons";
// import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  //const [expanded, setExpaned] = useState(true);

  // const sidebarVariants = {
  //   true: {
  //     left: "0",
  //   },
  //   false: {
  //     left: "-60%",
  //   },
  // };
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />

              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
