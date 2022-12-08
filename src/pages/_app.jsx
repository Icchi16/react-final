import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import "../styles/globals.css"
import "antd/dist/reset.css";

const MyApp = ({ Component, pageProp }) => {
  return (
    <>
      <HomeLayout>
        <Component {...pageProp} />
      </HomeLayout>
    </>
  );
};

export default MyApp;
