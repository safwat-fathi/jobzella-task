import React, { useRef } from "react";
// prop-types package
import PropTypes from "prop-types";
// react icons
import { AiOutlineStar, AiOutlineShareAlt } from "react-icons/ai";
// app components
import Image from "../Image";
import Typography from "../Typography";
import Button from "../Button";
// component styles
import styles from "./card.module.css";

const Card = ({ img, heading, subheading, description }) => {
  const saveBtn = useRef(null);
  const shareBtn = useRef(null);
  const rentBtn = useRef(null);

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image defaultSrc={img} />
      </div>
      <div className={styles.cardDesc}>
        <Typography color="primary" variant="h4">
          {heading}
        </Typography>
        <Typography color="secondary" variant="h6">
          {subheading}
        </Typography>
        <Typography color="secondary" variant="text">
          {description}
        </Typography>
      </div>
      <hr />
      <div className={styles.cardAction}>
        <Button
          ref={saveBtn}
          type="secondary"
          size="sm"
          clickHandler={() => console.log(`${saveBtn.current} clicked`)}
        >
          <AiOutlineStar />
          <span>Save</span>
        </Button>
        <Button
          ref={shareBtn}
          type="secondary"
          size="sm"
          clickHandler={() => console.log("Button clicked")}
        >
          <AiOutlineShareAlt />
          <span>Share</span>
        </Button>
        <Button
          ref={rentBtn}
          size="lg"
          roundedSize="lg"
          type="primary"
          clickHandler={() => console.log("Button clicked")}
        >
          RENT
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
