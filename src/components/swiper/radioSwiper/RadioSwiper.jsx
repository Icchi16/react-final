// import Swiper core and required modules
import { Navigation, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styles from "./RadioSwiper.module.css";
import RadioCard from "../radioCard/RadioCard";
import _ from "lodash";
import { useSelector } from "react-redux";
import RadioSwiperSkeleton from "../../skeleton/radioSwiperSkeleton/radioSwiperSkeleton";

const RadioSwiper = ({ slides }) => {
  const isSomeQueryPending = useSelector((state) =>
    Object.values(state.radioApi.queries).some(
      (query) => query.status === "pending"
    )
  );

  const radioList = slides;

  return isSomeQueryPending ? (
    <div>
      {/* <Swiper
        className={styles.HomeSwiper}
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={10}
        slidesPerView={6}
        navigation
        key={1}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <RadioSwiperSkeleton />
        </SwiperSlide>
      </Swiper> */}
      <RadioSwiperSkeleton skeletonType={"radioList"}/>
    </div>
  ) : (
    <div className={styles.HomeSwiperContainer}>
      <Swiper
        className={styles.HomeSwiper}
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={10}
        slidesPerView={6}
        navigation
        key={1}
        scrollbar={{ draggable: true }}
      >
        {radioList.map((slide) => {
          return (
            <SwiperSlide>
              <RadioCard radio={slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RadioSwiper;
