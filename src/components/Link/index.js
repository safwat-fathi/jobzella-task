import React from "react";
// styles
import styles from "./link.module.css";

const NavLink = ({ to, children, ...props }) => {
  return (
    <>
      {/* only for demo */}
      {/* should be react router Link */}
      <a className={styles.Link} href={to} {...props}>
        {children}
      </a>
    </>
  );
};

export default NavLink;
