import React from "react";
// react icons
import { AiTwotoneBell } from "react-icons/ai";
/* app components */
// notification
import Notification from "../../components/Notification";
// typography
import Typography from "../../components/Typography";
// button
import Button from "../../components/Button";
// nav link
import Link from "../../components/Link";
// img
import Image from "../../components/Image";
// assets
// source for mobile screens
import mobLogo from "../../assets/images/logo192.png";
// source for big screens
import defLogo from "../../assets/images/logo512.png";
// styles
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        {/* logo */}
        <div className={styles.logo}>
          <Image defaultSrc={defLogo} mobSrc={mobLogo} tabSrc={defLogo} />
        </div>
        {/* links */}
        <div className={styles.links}>
          <Link to="/projects">Projects</Link>
          <Link to="/community">Community</Link>
          <Link to="/courses">Courses</Link>
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
          {/* <Typography color="secondary" variant="p">
            user
          </Typography> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
