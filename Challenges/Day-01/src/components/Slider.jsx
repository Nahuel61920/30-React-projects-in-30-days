import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider.css";

import { data } from "./data";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

const Slider = () => {
  return (
    <section id="slider" className="main-slider-wrapper">
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 6,
            slideShadows: true,
            }}
            // pagination={true}
        >
            {data.map((item, key) => (
            <SwiperSlide>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.info}</p>
            </SwiperSlide>
            ))}
        </Swiper>
    </section>
  );
};

export default Slider;