import React from "react";
// prop-types package
import PropTypes from "prop-types";
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

const Typography = ({ variant, color, children, ...props }) => {
  const Component = variant ? variantsMapping[variant] : "p";

  console.log(Component);

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

Typography.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Typography;
