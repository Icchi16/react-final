import React, { useEffect, useState } from "react";
import RadioSwiper from "../components/swiper/radioSwiper/RadioSwiper";
import { wrapper } from "../services/store/store";
import {
  getRunningQueriesThunk,
  getTopRadio,
  resetApiState,
  useGetTopRadioQuery,
} from "../services/api/radioApi";
import { useDispatch } from "react-redux";

const App = (props) => {
  const forYouSlides = [],
    hotSlides = [],
    artistSlides = [];
  const topRadioQuery = useGetTopRadioQuery();
  const topRadioLoading = topRadioQuery.isLoading;
  const topRadioRejected = topRadioQuery.isError;
  const topRadio = topRadioQuery.data;
  console.log(topRadio);
  // console.log(topRadioRejected);

  if (topRadioLoading) return <div>Loading...</div>;
  else
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

          <h1 onClick={() => {}}>{`Hello there`}</h1>
        </div>
      </div>
    );
};

// export const getStaticProps = wrapper.getStaticProps((store) => async () => {
//   store.dispatch(resetApiState());
//   store.dispatch(getTopRadio.initiate("stations/topclick"));
//   await Promise.all(store.dispatch(getRunningQueriesThunk()));

//   return { props: {} };
// });

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getTopRadio.initiate());
});

export default App;
