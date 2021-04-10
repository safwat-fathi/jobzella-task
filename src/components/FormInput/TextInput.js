import React, { forwardRef, useEffect } from "react";
// prop-types package
import PropTypes from "prop-types";
// app components
import Typography from "../Typography";

const TextInput = forwardRef(
  (
    {
      name,
      type,
      placeholder,
      onChange,
      className,
      value,
      error,
      children,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      console.log(value);
    }, [value]);

    return (
      <>
        <input
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          style={error && { border: "solid 1px red" }}
          {...props}
        />
        {error && (
          <Typography variant="text" color="error">
            {error}
          </Typography>
        )}
      </>
    );
  }
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
