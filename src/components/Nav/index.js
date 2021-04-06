import React from "react";
// nav links
import NavLink from "./NavLink";
// img
import Image from "../Image";
// assets - images
import mobLogo from "../../assets/images/logo192.png";
import defLogo from "../../assets/images/logo512.png";
// styles
import "./styles.css";

const index = () => {
  return (
    <nav>
      {/* logo */}
      <div className="logo">
        <Image defaultSrc={defLogo} mobSrc={mobLogo} tabSrc={defLogo} />
      </div>
      {/* links */}
      <div className="links">
        <NavLink to="/projects" value="Projects" />
        <NavLink to="/community" value="Community" />
        <NavLink to="/courses" value="Courses" />
      </div>
      {/* user section */}
      <div className="user">user section</div>
    </nav>
  );
};

export default index;
