import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import landing from "./images/badge1.png";
import dashboard from "./images/badge2.png";
import crud from "./images/badge3.png";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Certificates.css";


SwiperCore.use([Pagination, EffectCoverflow]);

const Certificates = () => {
  return(
    <div className="bg-certificats">
      <p className="heading">Insignias Digitales</p>
      <p className="text">Estas son algunas insignias digitales proporcionadas por uCamp</p>

      <div className="slideshow">
        <Swiper
          grabCursor={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 5,
            stretch: 20,
            depth: 75,
            modifier: 6,
            slideShadows: false,
          }}
          pagination={{
            clickable: true, 
            type: "fraction",
          }}
        >
          
          <SwiperSlide>
            <img src={landing} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dashboard} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={crud} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          
        </Swiper>
      </div>

    </div>
  )
}

export default Certificates;