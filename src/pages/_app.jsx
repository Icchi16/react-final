import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import "../styles/globals.css";
import "antd/dist/reset.css";
import { Provider } from "react-redux";
import { ConfigProvider, theme } from "antd";
import { wrapper } from "../services/store/store";

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  console.log(props)
  return (
    <Provider store={store}>
      <ConfigProvider theme={{ token: { colorPrimary: "#2c4a75" } }}>
        <HomeLayout>
          <Component {...props.pageProp} />
        </HomeLayout>
      </ConfigProvider>
    </Provider>
  );
};

export default MyApp;
