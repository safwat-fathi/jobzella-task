import React from "react";
// nav links
import NavLink from "./NavLink";
// img wrapper
import ImageWrapper from "../ImageWrapper";
// img
import Image from "../Image";
// assets - images
// source for mobile screens
import mobLogo from "../../assets/images/logo192.png";
// source for big screens
import defLogo from "../../assets/images/logo512.png";
// styles
const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c7c4c4",
  },
};

const index = () => {
  return (
    <nav style={styles.nav}>
      {/* logo */}
      <ImageWrapper size={"lg"}>
        <Image defaultSrc={defLogo} mobSrc={mobLogo} tabSrc={defLogo} />
      </ImageWrapper>
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
