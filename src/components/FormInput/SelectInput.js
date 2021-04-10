import React, { forwardRef, useEffect } from "react";
// react select package
import Select from "react-select";
// prop-types package
import PropTypes from "prop-types";

const SelectInput = forwardRef(
  ({ name, value, placeholder, options, onChange, error, ...props }, ref) => {
    useEffect(() => {
      console.log(value);
    }, [value]);

    return (
      <>
        <Select
          ref={ref}
          name={name}
          value={value}
          placeholder={}
          onChange={onChange}
          options={options}
          {...props}
        />
      </>
    );
  }
);

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default SelectInput;
