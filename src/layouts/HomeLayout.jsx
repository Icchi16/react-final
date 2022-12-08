import React from "react";

import { Layout, theme } from "antd";

import HomeHeader from "../components/header/HomeHeader";
import HomeFooter from "../components/footer/HomeFooter";

const { Footer, Content } = Layout;

const HomeLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <HomeHeader />
      <Content>{children}</Content>
      <HomeFooter />
    </Layout>
  );
};

export default HomeLayout;
