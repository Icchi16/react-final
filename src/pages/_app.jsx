import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { ConfigProvider, theme } from "antd";
import { wrapper } from "../services/store/store";
import { StyleProvider } from "@ant-design/cssinjs";

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2c4a75",
          },
        }}
      >
        <StyleProvider hashPriority="high">
          <HomeLayout>
            <Component {...props.pageProps} />
          </HomeLayout>
        </StyleProvider>
      </ConfigProvider>
    </Provider>
  );
};

export default MyApp;
