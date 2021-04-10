import React from "react";
// react router
import { Link as RouterLink } from "react-router-dom";
// prop types
import PropTypes from "prop-types";
// component styles
import styles from "./link.module.css";

const Link = ({ to, children, ...props }) => {
  return (
    <>
      <RouterLink className={styles.Link} to={to} {...props}>
        {children}
      </RouterLink>
    </>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
