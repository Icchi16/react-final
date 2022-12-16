import React from "react";
import { useState } from "react";

import { Layout, theme, Breadcrumb, Menu } from "antd";

import HomeHeader from "../components/header/HomeHeader";
import HomeFooter from "../components/footer/HomeFooter";
import HomeSider from "../components/sider/HomeSider";
// 
const { Header, Content, Footer, Sider } = Layout;

const HomeLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <HomeSider />
      </Sider>
      <Layout className="site-layout">
        <Header>
          <HomeHeader />
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {children}
        </Content>
        <Footer>
          <HomeFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
