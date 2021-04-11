import React, { useRef } from "react";
// prop-types package
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// react icons
import { AiOutlineStar, AiOutlineShareAlt } from "react-icons/ai";
// app components
import Image from "../Image";
import Typography from "../Typography";
import Button from "../Button";
// component styles
import styles from "./card.module.css";

const Card = ({ id, img, heading, subheading, description }) => {
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
          clickHandler={() => console.log("Button clicked")}
        >
          <AiOutlineShareAlt />
          <span>Share</span>
        </Button>
        <Button
          size="lg"
          roundedSize="lg"
          type="primary"
          clickHandler={() => console.log("Button clicked")}
        >
          <Link
            to={{
              pathname: `/details/${id}`,
              state: { id, img, heading, subheading, description },
            }}
          >
            RENT
          </Link>
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
