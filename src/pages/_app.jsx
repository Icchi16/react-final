import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const MyApp = ({ Component, pageProp }) => {
  return (
    <div>
      <Navbar />

      <Component {...pageProp} />

      <Footer />
    </div>
  );
};

export default MyApp;
