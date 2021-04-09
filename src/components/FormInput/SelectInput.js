import React from "react";
// react select package
import Select from "react-select";
// prop-types package
import PropTypes from "prop-types";

const SelectInput = ({
  name,
  value,
  placeholder,
  options,
  onChange,
  error,
  ...props
}) => {
  return (
    <>
      <Select
        name={name}
        value={value}
        placeholder={}
        onChange={onChange}
        options={options}
        {...props}
      />
    </>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default SelectInput;
