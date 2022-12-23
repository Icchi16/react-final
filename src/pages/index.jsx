import React from "react";
import HomeSwiper from "../components/swiper/homeSwiper/HomeSwiper";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { click } from "../services/features/randomRadio/randomRadio.slice";

const App = () => {
  const randomRadio = useSelector((state) => console.log(state.click.data));
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto">
      <div>
        <h2 className="mb-12">For you</h2>
        <HomeSwiper />
        <h1 onClick={() => dispatch(click())}>Click here</h1>
      </div>
    </div>
  );
};

export default App;
