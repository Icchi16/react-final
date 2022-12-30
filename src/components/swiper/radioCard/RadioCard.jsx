import { Card } from "antd";
import React from "react";
import styles from "./RadioCard.module.css";
import Link from "next/link";

const RadioCard = ({ radio }) => {
  const { Meta } = Card;
  return (
    <Link href="/">
      <Card styles={styles.RadioCard} hoverable>
        <Meta
          title={`Radio Title ${radio}`}
          description={`Description of ${radio}`}
        />
      </Card>
    </Link>
  );
};

export default RadioCard;
