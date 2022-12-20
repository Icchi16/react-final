import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import "../styles/globals.css";
import "antd/dist/reset.css";

import { ConfigProvider, theme } from "antd";

const MyApp = ({ Component, pageProp }) => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#2c4a75" } }}>
      <HomeLayout>
        <Component {...pageProp} />
      </HomeLayout>
    </ConfigProvider>
  );
};

export default MyApp;
