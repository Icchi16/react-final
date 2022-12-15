import React from "react";

import Router from "next/router";
import Link from "next/link";
import Image from "next/image";

// Ant Design
import { Menu, Layout } from "antd";
import Login from "../login/Login";
import BookAndSearch from "../bookAndSearch/BookAndSearch";
import Language from "../language/Lanuage";
import CategoriesBar from "../catagoriesBar/CatagoriesBar";

// Code
const { Header } = Layout;
const HomeHeader = () => {
  return (
    <Header className="flex-col bg-info h-auto">
      <div className="container mx-auto 1st-line-header flex-row flex"></div>
      <div className="container mx-auto 2nd-line-header flex flex-row flex-nowrap justify-center">
        <Link href="/" className="flex-none">
          {/* <Image src="./" alt="" /> */}
          Logo
        </Link>
        <BookAndSearch />
        <div className="flex flex-row flex-none">
          <Language className="" />
          <Login className="" />
        </div>
      </div>
      <div className="container mx-auto 3rd-line-header">
        <CategoriesBar />
      </div>
    </Header>
  );
};
export default HomeHeader;
