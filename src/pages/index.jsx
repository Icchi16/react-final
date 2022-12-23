import React from "react";
import HomeSwiper from "../components/swiper/homeSwiper/HomeSwiper";
import Link from "next/link";

const App = () => {

  console.log(api);
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="mb-12">For you</h2>
        <HomeSwiper />
      </div>
    </div>
  );
};

export default App;
