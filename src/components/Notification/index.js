import React from "react";
// styles
import styles from "./notification.module.css";

const Notification = ({ hasNewNotifications, children }) => {
  const NotificationBadge = () => {
    return <span className={styles.notificationBadge}></span>;
  };

  return (
    <div className={styles.notifications}>
      {hasNewNotifications && <NotificationBadge />}
      {children}
    </div>
  );
};

export default Notification;
