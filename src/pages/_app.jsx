import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import "../styles/globals.css";
import "antd/dist/reset.css";
import { store } from "../services/store/store";
import { Provider } from "react-redux";
import { ConfigProvider, theme } from "antd";

const MyApp = ({ Component, pageProp }) => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{ token: { colorPrimary: "#2c4a75" } }}>
        <HomeLayout>
          <Component {...pageProp} />
        </HomeLayout>
      </ConfigProvider>
    </Provider>
  );
};

export default MyApp;
