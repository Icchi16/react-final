import { Card } from "antd";
import React from "react";
import HorizontalCard from "../horizontalCard/HorizontalCard";

const HorizontalList = (list) => {
  const mockList = [{ title: "1" }, { title: "2" }, { title: "3" }];

  return (
    <Card>
      {mockList.map((e) => {
        console.log(e);
        return (
          <Card.Grid>
            <HorizontalCard card={e} />
          </Card.Grid>
        );
      })}
    </Card>
  );
};

export default HorizontalList;
