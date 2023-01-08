import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioSwiper from "../components/swiper/radioSwiper/RadioSwiper";
import { wrapper } from "../services/store/store";
import {
  getPokemonByName,
  getRunningQueriesThunk,
  radioApi,
  resetApiState,
  useGetPokemonByNameQuery,
} from "../services/api/radioApi";

const App = (props) => {
  const forYouSlides = [],
    hotSlides = [],
    artistSlides = [];
  const result = useGetPokemonByNameQuery();
  const { isLoading, error, data } = result;

  console.log(isLoading);
  console.log(error);
  console.log(data);

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // store.dispatch(api.endpoints.getPokemonByName.initiate());

    // const prom = await Promise.all(
    //   store.dispatch(radioApi.util.getRunningQueriesThunk())
    // );

    store.dispatch(resetApiState());
    store.dispatch(getPokemonByName.initiate());
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return { props: {} };
  }
);

export default App;
