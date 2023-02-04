import { Card, Skeleton } from "antd";
import React from "react";
import styles from "./RadioSwiperSkeleton.module.css";

const RadioSwiperSkeleton = ({ skeletonType }) => {
  switch (skeletonType) {
    case "radioList": {
      const { Meta } = Card;

      return (
        <Card cover={<Skeleton.Image active />} hoverable>
          <Meta
            title={<Skeleton.Input active block />}
            description={<Skeleton.Input active block />}
          />
        </Card>
      );
    }
  }
};

export default RadioSwiperSkeleton;
