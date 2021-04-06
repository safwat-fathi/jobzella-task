import React from "react";

const styles = {
  navLink: {
    color: "black",
    borderBottom: "2px solid transparent",
    textDecoration: "none",
    transition: "all 0.3s",
    "&:hover": {
      borderBottom: "2px solid white",
    },
  },
};

const NavLink = ({ to, value }) => {
  return (
    <>
      {/* only for demo */}
      {/* should be react router Link */}
      <a style={styles.navLink} href={to}>
        {value}
      </a>
    </>
  );
};

export default NavLink;
