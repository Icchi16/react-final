import { Card, Skeleton } from "antd";
import React from "react";

const RadioSwiperSkeleton = ({ skeletonType }) => {
  switch (skeletonType) {
    case "radioList": {
      const { Meta } = Card;

      return (
        <Card>
          {/* <Meta
            title={<Skeleton.Input active />}
            description={<Skeleton.Input active />}
          /> */}
        </Card>
      );
    }
  }
};

export default RadioSwiperSkeleton;
