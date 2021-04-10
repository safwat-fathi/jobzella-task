import React, { forwardRef, useEffect } from "react";
// prop-types package
import PropTypes from "prop-types";
// classnames package
import cn from "classnames";
// styles
import styles from "./button.module.css";

const Button = forwardRef(
  (
    {
      type,
      size,
      hover,
      disabled,
      roundedSize,
      clickHandler,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
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
  }
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  hover: PropTypes.bool,
  disabled: PropTypes.bool,
  roundedSize: PropTypes.string,
  clickHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
