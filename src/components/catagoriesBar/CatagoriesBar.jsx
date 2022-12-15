import { Menu } from "antd";
import React from "react";

const CategoriesBar = () => {
  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={"item-2"}
        items={[
          { label: "Nav 1", key: "item-1" },
          { label: "Nav 2", key: "item-2" },
        ]}
      />
    </div>
  );
};

export default CategoriesBar;
