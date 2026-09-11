import React from 'react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import portfolioOneData from './porfolioOneData';
import PortfolioOneSlide from './PortfolioOneSlide';


function Porfolio1() {
    return (
        <section className="portfolio-section section-padding pt-0">
            <div className="container">
                <div className="project-wrapper">
                    <Swiper modules={[Navigation, Pagination]} navigation className="portfolio-carousel-active owl-carousel">
                        {portfolioOneData.map((data) => (
                            <SwiperSlide key={data.id}>
                                <PortfolioOneSlide
                                    image={data.image}
                                    imgLink={data.imgLink}
                                    category={data.category}
                                    client={data.client}
                                    title={data.heading}
                                    desc={data.desc}
                                    btnText={data.btnText}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Porfolio1;
