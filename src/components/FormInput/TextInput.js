import React from "react";
// prop-types package
import PropTypes from "prop-types";

const TextInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  ...props
}) => {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        style={error && { border: "solid 1px red" }}
        {...props}
      />
      {error && <p>{error}</p>}
    </>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
