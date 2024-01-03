import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import { Autoplay, EffectFade, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slider.module.scss";

export default function SimpleSlider() {
  return (
    <div className="swiper h-screen relative">
      <Swiper
        modules={[Autoplay, EffectFade, Zoom]}
        style={{ width: "100vw", height: "100vh" }}
        spaceBetween={0}
        zoom={true}
        slidesPerView={1}
        loop={true}
        speed={2000}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.zoomContainer}>
            <Image
              src="/guitare.png"
              layout="fill"
              objectFit="cover"
              alt="Guitar"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.zoomContainer}>
            <Image
              src="/piano.png"
              layout="fill"
              objectFit="cover"
              alt="Guitar"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.zoomContainer}>
            {" "}
            <Image
              src="/saxophone.png"
              layout="fill"
              objectFit="cover"
              alt="Guitar"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.sliderOverlay}></div>
    </div>
  );
}
