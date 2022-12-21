import React, { useState } from "react";
import { Card, Avatar, Skeleton, Switch } from "antd";

const RadioCard = () => {
  const { Meta } = Card;
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <div>
      <Card hoverable cover={<div style={{ width: 30, height: 50 }}></div>}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  );
};

export default RadioCard;
