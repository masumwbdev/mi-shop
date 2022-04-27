import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import banOne from '../../../Images/banner/ban1.jpg'
import banTwo from '../../../Images/banner/ban2.jpg'
import banThree from '../../../Images/banner/ban3.jpg'


const Banner = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><img className="img-fluid" src={banOne} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={banTwo} alt="" /></SwiperSlide>
                <SwiperSlide><img className="img-fluid" src={banThree} alt="" /></SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;