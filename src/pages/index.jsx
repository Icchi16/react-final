import React from "react";
import HomeSwiper from "../components/swiper/homeSwiper/HomeSwiper";
import { click } from "../services/slices/topClickRadio/topClickRadio.slice";

const App = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="mb-12">For you {process.env.TOP_CLICK}</h2>
        <HomeSwiper />
        <h1 onClick={() => dispatch(click())}>Click here</h1>
      </div>
    </div>
  );
};

export default App;
