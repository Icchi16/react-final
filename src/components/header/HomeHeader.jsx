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
    <Header className="flex-col">
      <div className="container mx-auto 1st-line-header flex-row flex"></div>
      <div className="container mx-auto 2nd-line-header flex flex-row flex-nowrap">
        <Link href="/" className="flex-none">
          {/* <Image src="./" alt="" /> */}
          Logo
        </Link>
        <div className="flex-auto">Search</div>
        <div className="flex-1">Language</div>
        <div className="flex-1">Login</div>
      </div>
      <div className="container mx-auto 3rd-line-header">
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
