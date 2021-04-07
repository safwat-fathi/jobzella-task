import React from "react";
// classnames package
import cn from "classnames";
// styles
import styles from "./typography.module.css";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading: "h6",
  paragraph: "p",
  text: "p",
};

const index = ({ variant, color, children, ...props }) => {
  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <Component
      className={cn({
        [styles[variant]]: variant,
        [styles[`color--${color}`]]: color,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default index;
