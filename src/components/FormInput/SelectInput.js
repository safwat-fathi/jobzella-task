import React, { forwardRef } from "react";
// react select package
import Select from "react-select";
// prop-types package
import PropTypes from "prop-types";
// styles
import styles from "./formInputs.module.css";

const SelectInput = forwardRef(
  ({ name, value, placeholder, options, onChange, error, ...props }, ref) => {
    return (
      <>
        <Select
          className={styles.selectInput}
          ref={ref}
          name={name}
          placeholder={placeholder}
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
  // value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default SelectInput;
