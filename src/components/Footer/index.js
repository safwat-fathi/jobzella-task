import React from "react";
// app components
import Image from "../Image";
import FooterLinks from "../FooterLinks";
import { SelectInput } from "../FormInput";
// component styles
import styles from "./footer.module.css";
// assets
// source for mobile screens
import mobLogo from "../../assets/images/logo192.png";
// source for big screens
import defLogo from "../../assets/images/logo512.png";
// dummy data
import { footerLinks, languages } from "../../data";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image defaultSrc={defLogo} mobSrc={mobLogo} />
      </div>
      <div className={styles.links}>
        <FooterLinks title="General" links={footerLinks.generalLinks} />
        <FooterLinks title="Help" links={footerLinks.helpLinks} />
      </div>
      <div className={styles.language}>
        <SelectInput
          name="lang"
          options={languages}
          placeholder="Select language"
        />
      </div>
    </div>
  );
};

export default Footer;
