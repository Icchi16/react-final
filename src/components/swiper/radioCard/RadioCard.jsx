import { Card } from "antd";
import React from "react";
import styles from "./RadioCard.module.css";
import Link from "next/link";

const RadioCard = ({ radio }) => {
  const { Meta } = Card;
  return (
    <Link href={radio.url_resolved}>
      <Card
        cover={<img src={radio.favicon} />}
        hoverable
      >
        <div>Station</div>
        <Meta title={radio.name} description={radio.countrycode} />
      </Card>
    </Link>
  );
};

export default RadioCard;
