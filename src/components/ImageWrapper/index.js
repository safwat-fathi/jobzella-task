import React from "react";

const styles = {
  lg: {
    width: "4em",
  },
  xl: {
    width: "8em",
  },
};

const index = ({ children, size }) => {
  return <div style={styles[size]}>{children}</div>;
};

export default index;
