import React from "react";
// react icons
import { AiOutlineStar, AiOutlineShareAlt } from "react-icons/ai";
// app components
import Image from "../../components/Image";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
// component styles
import styles from "./card.module.css";
// card image
import cardImg from "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.thinkwebcontent.com%2Fproperty%2F26974%2F5394780%2F20200708053410%2Fw1920h1079%2Fs1600x1200%2Fx-147973920.jpg&f=1&nofb=1";

const index = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image defaultSrc={cardImg} />
        <Typography color="primary" variant="h4">
          Lorem ipsum dolor sit.
        </Typography>
        <Typography color="secondary" variant="h6">
          Lorem, ipsum dolor
        </Typography>
        <Typography color="secondary" variant="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eveniet
          optio est nihil aliquam eaque cupiditate illo, similique alias. Nisi
          consectetur esse eos accusamus hic voluptatibus aspernatur adipisci
          qui a.
        </Typography>
        <hr />
        <div className={styles.cardAction}>
          <Button size="sm" clickHandler={() => console.log("icon clicked")}>
            <AiOutlineStar />
            Save
          </Button>
          <Button size="sm" clickHandler={() => console.log("icon clicked")}>
            <AiOutlineShareAlt />
            Share
          </Button>
          <Button size="sm" clickHandler={() => console.log("icon clicked")}>
            RENT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default index;
