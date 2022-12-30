import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeSwiper from "../components/swiper/radioSwiper/RadioSwiper";
import { wrapper } from "../services/store/store";
import {
  getTopClickRadio,
  selectTopClickRadio,
} from "../services/slices/topClickRadio/topClickRadio.slice";

const App = (props) => {
  const topClickRadio = useSelector(selectTopClickRadio);
  console.log(topClickRadio);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto">
      <div>
        <h2 className="mb-12">For you</h2>
        <HomeSwiper />
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
    store.dispatch(getTopClickRadio("It's Alive"));
    return { props: {} };
  }
);

export default App;
