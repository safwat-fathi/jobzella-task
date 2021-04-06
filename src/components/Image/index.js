import React from "react";

const index = ({ defaultSrc, mobSrc, tabSrc }) => {
  return (
    <picture>
      <source media="(min-width:650px)" srcSet={tabSrc} />
      <source media="(min-width:320px)" srcSet={mobSrc} />
      <img src={defaultSrc} style={{ width: "100%" }} />
    </picture>
  );
};

export default index;
