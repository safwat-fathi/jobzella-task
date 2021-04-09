import React from "react";
// prop types package
import PropTypes from "prop-types";
// component styles
import styles from "./link.module.css";

const Link = ({ to, children, ...props }) => {
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

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
