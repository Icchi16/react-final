import React from "react";
import HomeSwiper from "../components/swiper/homeSwiper/HomeSwiper";

const App = () => {
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
