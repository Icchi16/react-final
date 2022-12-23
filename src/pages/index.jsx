import React from "react";
import HomeSwiper from "../components/swiper/homeSwiper/HomeSwiper";
import Link from "next/link";
import { useSelector } from "react-redux";

const App = () => {
const randomRadio = useSelector (state => state.)  

  return (
    <div className="container mx-auto">
      <div>
        <h2 className="mb-12">For you</h2>
        <HomeSwiper />
        <h1 onClick={()=>}>Click here</h1>
      </div>
    </div>
  );
};

export default App;
