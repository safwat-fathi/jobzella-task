import React from "react";
// app components
import Image from "../../components/Image";
// component styles
import styles from "./footer.module.css";
// assets
// source for mobile screens
import mobLogo from "../../assets/images/logo192.png";
// source for big screens
import defLogo from "../../assets/images/logo512.png";

const links = {
  generalLinks: [
    {
      url: "/exampleURL",
      name: "General Link",
    },
    {
      url: "/exampleURL",
      name: "General Link",
    },
    {
      url: "/exampleURL",
      name: "General Link",
    },
    {
      url: "/exampleURL",
      name: "General Link",
    },
  ],
  help: [
    {
      url: "/exampleURL",
      name: "Help Link",
    },
    {
      url: "/exampleURL",
      name: "Help Link",
    },
  ],
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image defaultSrc={defLogo} mobSrc={mobLogo} />
      </div>
    </div>
  );
};

export default Footer;
