import React from 'react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
 import "swiper/css/bundle";
import img1 from '../../assets/img/gallery/1.jpg';
import img2 from '../../assets/img/gallery/2.jpg';
import img3 from '../../assets/img/gallery/3.jpg';



function DetailsCarousel() {
    return (
        <div>
            <Swiper modules={[Navigation, Pagination]} navigation pagination className="service-gallery">
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${img1})` }}
                    />
                    hello
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${img2})` }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${img3})` }}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default DetailsCarousel;
