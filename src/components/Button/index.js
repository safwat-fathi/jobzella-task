import React from "react";
// classnames package
import cn from "classnames";
// styles
import styles from "./button.module.css";

const index = ({
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
      onClick={() => clickHandler()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default index;
