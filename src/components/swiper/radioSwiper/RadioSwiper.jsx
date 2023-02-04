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

  const SLIDES_PER_VIEWS = 6;
  const SPACE_BETWEEN = 10;
  const radioList = slides;
  let skeletonArray = new Array(SLIDES_PER_VIEWS).fill(1);

  console.log(radioList);
  return isSomeQueryPending ? (
    <div>
      <Swiper
        className={styles.HomeSwiper}
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={SPACE_BETWEEN}
        slidesPerView={SLIDES_PER_VIEWS}
        navigation
        key={1}
        scrollbar={{ draggable: false }}
      >
        {skeletonArray.map((slides) => {
          return (
            <SwiperSlide>
              <RadioSwiperSkeleton skeletonType="radioList" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  ) : (
    <div className={styles.HomeSwiperContainer}>
      <Swiper
        className={styles.HomeSwiper}
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={SPACE_BETWEEN}
        slidesPerView={SLIDES_PER_VIEWS}
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
