import React from "react";
// prop-types package
import PropTypes from "prop-types";
// classnames package
import cn from "classnames";
// styles
import styles from "./button.module.css";

const Button = ({
  type,
  size,
  hover,
  disabled,
  roundedSize,
  clickHandler,
  children,
  ...props
}) => {
  return (
    <button
      className={cn({
        [styles.btn]: true,
        [styles[type]]: type,
        [styles[`size--${size}`]]: size,
        [styles["hover"]]: hover,
        [styles[`rounded--${roundedSize}`]]: roundedSize,
      })}
      onClick={clickHandler}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  hover: PropTypes.bool,
  disabled: PropTypes.bool,
  roundedSize: PropTypes.string,
  clickHandler: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default Button;
