import React from "react";
// prop-types package
import PropTypes from "prop-types";
// app components
import Typography from "../Typography";
import Link from "../Link";
// components styles
import styles from "./footerLinks.module.css";

const FooterLinks = ({ links, title }) => {
  return (
    <div className={styles.footerLinks}>
      <Typography variant="h4" color="primary">
        {title}
      </Typography>
      <ul className={styles.links}>
        {links.map((link) => {
          return (
            <li>
              <Link to={link.url}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FooterLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.element.isRequired,
};

export default FooterLinks;
