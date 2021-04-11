import React from "react";
// prop types
import PropTypes from "prop-types";
// styles
import styles from "./cardsContainer.module.css";

const CardsContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

CardsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardsContainer;
