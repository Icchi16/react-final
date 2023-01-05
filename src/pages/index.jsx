import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioSwiper from "../components/swiper/radioSwiper/RadioSwiper";
import { wrapper } from "../services/store/store";
import {
  getTopClickRadio,
  selectTopClickRadio,
} from "../services/slices/topClickRadio/topClickRadio.slice";
import { Typography } from "antd";
import HorizontalList from "../components/list/horizontalList/HorizontalLis";

const App = (props) => {
  const topClickRadio = useSelector(selectTopClickRadio);
  const dispatch = useDispatch();

  const forYouSlides = {
      data: "sds",
      styling: [{ home: "home" }, { many: "many" }],
    },
    hotSlides = [],
    artistSlides = [];

  return (
    <div className="container mx-auto">
      <div>
        <h2 className="mb-7 mt-0">For You</h2>

        <div>
          <h3>Stations Near You</h3>
          <p>Live and local, just for you</p>
          <RadioSwiper slides={forYouSlides} />
        </div>

        <div>
          <h3>The Latest On Bills Safety Damar Hamlin's Health</h3>
          <p>Live and local, just for you</p>
          <RadioSwiper slides={hotSlides} />
        </div>

        <div>
          <h3>Follow Your Leagues & Teams</h3>
          <p>
            Get the best audio in your favorite teams instantly in one place
          </p>
          <RadioSwiper slides={artistSlides} />
        </div>

        <h1
          onClick={() => {
            dispatch(getTopClickRadio("test"));
          }}
        >
          {`Hello ${topClickRadio.data}`}
        </h1>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    return { props: {} };
  }
);

export default App;
