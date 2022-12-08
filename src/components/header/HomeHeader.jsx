import React from "react";

import Router from "next/router";
import Link from "next/link";
import Image from "next/image";

// Ant Design
import { Menu, Layout } from "antd";

// Code
const { Header } = Layout;
const HomeHeader = () => {
  return (
    <Header className="flex">
      <div className="1st-line-header flex-none">
        <div className="logo">Logo</div>
      </div>
      <div className="2nd-line-header flex-1">
        <div>Search</div>
        <div>Language</div>
        <div>Login</div>
      </div>
      <div className="3rd-line-header">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={"item-2"}
          items={[
            { label: "Nav 1", key: "item-1" },
            { label: "Nav 2", key: "item-2" },
          ]}
        />
      </div>
    </Header>
  );
};
export default HomeHeader;
