import React from "react";
// react icons
import { AiTwotoneBell } from "react-icons/ai";
/* app components */
// notification
import Notification from "../Notification";
// typography
import Typography from "../Typography";
// button
import Button from "../Button";
// nav link
import Link from "../Link";
// img
import Image from "../Image";
// assets
// source for mobile screens
import mobLogo from "../../assets/images/logo192.png";
// source for big screens
import defLogo from "../../assets/images/logo512.png";
// styles
import styles from "./nav.module.css";
// dummy data
import { navLinks } from "../../data";

const Nav = ({ links, user, notification, ...prop }) => {
  return (
    <nav {...prop}>
      <div className={styles.navbar}>
        {/* logo */}
        <div className={styles.logo}>
          <Image defaultSrc={defLogo} mobSrc={mobLogo} tabSrc={defLogo} />
        </div>
        {/* links */}
        <div className={styles.links}>
          {navLinks.map((link) => {
            return (
              <Link key={link.name} to={link.url}>
                {link.name}
              </Link>
            );
          })}
          {/* <Link to="/community">Community</Link>
          <Link to="/courses">Courses</Link> */}
        </div>
        {/* user section */}
        <div className={styles.navUserInfo}>
          {/* notification */}
          <Notification hasNewNotifications>
            <Button
              type=""
              size="sm"
              clickHandler={() => console.log("icon clicked")}
            >
              <AiTwotoneBell />
            </Button>
          </Notification>
          {/* user name */}
          <Typography color="black" variant="subheading">
            user
          </Typography>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
