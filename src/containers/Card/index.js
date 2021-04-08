import React from "react";
// react icons
import { AiOutlineStar, AiOutlineShareAlt } from "react-icons/ai";
// app components
import Image from "../../components/Image";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
// card assets
import cardImg from "./image.jpg";
// component styles
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image defaultSrc={cardImg} />
      </div>
      <div className={styles.cardDesc}>
        {/* <Typography color="primary" variant="h4">
          Lorem ipsum dolor sit.
        </Typography>
        <Typography color="secondary" variant="h6">
          Lorem, ipsum dolor
        </Typography>
        <Typography color="secondary" variant="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eveniet
          optio est nihil aliquam eaque cupiditate illo, similique alias. Nisi
          consectetur esse eos accusamus hic voluptatibus aspernatur adipisci
          qui a.
        </Typography> */}
      </div>
      <hr />
      <div className={styles.cardAction}>
        <Button
          type="secondary"
          size="sm"
          clickHandler={() => console.log("Button clicked")}
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
          type="primary"
          clickHandler={() => console.log("Button clicked")}
        >
          RENT
        </Button>
      </div>
    </div>
  );
};

export default Card;
