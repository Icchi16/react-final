import React from "react";
import { useSelector } from "react-redux";
import HomeSwiper from "../components/swiper/homeSwiper/HomeSwiper";
import { wrapper } from "../services/store/store";

const App = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="mb-12">For you {process.env.TOP_CLICK}</h2>
        <HomeSwiper />
        <h1>Click here {data}</h1>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ resolvedUrl }) => {
      console.log("resolvedUrl", resolvedUrl);

      return {
        props: {
          data: resolvedUrl,
        },
      };
    }
);

export default App;
