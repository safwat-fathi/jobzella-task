import React from "react";

const NavLink = ({ to, value }) => {
  return (
    <>
      {/* only for demo */}
      {/* should be react router Link */}
      <a href={to}>{value}</a>
    </>
  );
};

export default NavLink;
