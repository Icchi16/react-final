// import Swiper core and required modules
import { Navigation, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styles from "./HomeSwiper.module.css";

const HomeSwiper = () => {
  const slidePerView = () => {};

  return (
    <div className={styles.HomeSwiperContainer}>
      <Swiper
        className={styles.HomeSwiper}
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={10}
        slidesPerView={7}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className={styles.box}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.box}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.box}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.box}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.box}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.box}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.box}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.box}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.box}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.box}>Slide 1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
