import React from "react";
// react icons
import { AiOutlineStar, AiOutlineShareAlt } from "react-icons/ai";
// prop types
import PropTypes from "prop-types";
// app components
import Typography from "../Typography";
import Image from "../Image";
import Button from "../Button";
// styles
import styles from "./details.module.css";

const Details = ({ location }) => {
  const { state } = location;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Typography color="primary" variant="h4">
            {state.heading}
          </Typography>
          <Typography color="secondary" variant="h6">
            {state.subheading}
          </Typography>
        </div>
        <div className={styles.actions}>
          <Button
            type="secondary"
            size="sm"
            clickHandler={() => console.log(`saveBtn clicked`)}
          >
            <AiOutlineStar />
            <span>Save</span>
          </Button>
          <Button
            type="secondary"
            size="sm"
            clickHandler={() => console.log("Share clicked")}
          >
            <AiOutlineShareAlt />
            <span>Share</span>
          </Button>
          <Button
            size="lg"
            roundedSize="lg"
            type="primary"
            clickHandler={() => console.log("Rent clicked")}
          >
            RENT
          </Button>
        </div>
      </div>
      <div className={styles.img}>
        <Image defaultSrc={state.img} />
      </div>
      <div className={styles.description}>
        <Typography color="black" variant="text">
          {state.description}
        </Typography>
      </div>
    </div>
  );
};

export default Details;
