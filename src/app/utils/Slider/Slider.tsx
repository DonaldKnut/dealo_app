import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "./Slider.css";
// import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import images from "../../../../public/assets/images";

type Props = {};

const Slider = (props: Props) => {
  return (
    <div className="slider-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          //   clickable: true,
        }}
        // modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <Link href="/graphics">
          <SwiperSlide>
            <Image src={images.slide_image1} alt="slide-image" />
          </SwiperSlide>
        </Link>
        <SwiperSlide>
          <Image src={images.slide_image2} alt="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.slide_image3} alt="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.slide_image4} alt="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.slide_image5} alt="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.slide_image6} alt="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.slide_image7} alt="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.slide_image8} alt="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.slide_image9} alt="slide-image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.slide_image10} alt="slide-image" />
        </SwiperSlide>
        <div className="swiper_container">
          {/* <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
