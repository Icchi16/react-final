// import Swiper core and required modules
import { Navigation, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styles from "./RadioSwiper.module.css";
import RadioCard from "../radioCard/RadioCard";
import _ from "lodash";

const RadioSwiper = ({ slides }) => {
  const radioList = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
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
        {radioList.map((i) => {
          return (
            <SwiperSlide>
              <RadioCard radio={i} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RadioSwiper;
