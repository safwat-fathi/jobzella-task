import React from "react";
// prop-types package
import PropTypes from "prop-types";

const Image = ({ defaultSrc, mobSrc, tabSrc, ...prop }) => {
  return (
    <picture>
      <source media="(min-width:650px)" srcSet={tabSrc} />
      <source media="(min-width:320px)" srcSet={mobSrc} />
      <img src={defaultSrc} alt="" style={{ width: "100%" }} {...prop} />
    </picture>
  );
};

Image.propTypes = {
  defaultSrc: PropTypes.string.isRequired,
  mobSrc: PropTypes.string,
  tabSrc: PropTypes.string,
};

export default Image;
