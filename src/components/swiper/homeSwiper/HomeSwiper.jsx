// import Swiper core and required modules
import { Navigation, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styles from "./HomeSwiper.module.css";

const HomeSwiper = () => {
  const slidePerView = () => {};

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar]}
      spaceBetween={50}
      slidesPerView={5}
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
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default HomeSwiper;
