import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/style.css';
import '../css/hero.css';

import CardOne from '../../images/card8.png';
const heroPageTwo = () => {
    const styleCenter = {
        fontWeight: "lighter",
        fontStyle: "Italic",


    }

    return (
        <>








            <div className="newBrandSection">
                <div className="cardTwoHead">
                    <h3> <span style={styleCenter}> NEW </span> BRANDS</h3>
                </div>
                <div className="brandCardSection">



                    <Swiper
                        // slidesPerView={1}
                        // spaceBetween={}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper vj"
                    >




                        <SwiperSlide>
                            <div className="cardImg">
                                <img src={CardOne} alt="img" />
                                <div className="cardName">
                                    <h3>Choose Your
                                        <br /> Legacy.</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cardImg">
                                <img src={CardOne} alt="img" />
                                <div className="cardName">
                                    <h3>The legacy of
                                        <br /> craftmanship</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cardImg">
                                <img src={CardOne} alt="img" />
                                <div className="cardName">
                                    <h3>Our Exclusive
                                        <br /> Collection</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cardImg">
                                <img src={CardOne} alt="img" />
                                <div className="cardName">
                                    <h3>Our Exclusive
                                        <br /> Collection</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cardImg">
                                <img src={CardOne} alt="img" />
                                <div className="cardName">
                                    <h3>Our Exclusive
                                        <br /> Collection</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cardImg">
                                <img src={CardOne} alt="img" />
                                <div className="cardName">
                                    <h3>Our Exclusive
                                        <br /> Collection</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cardImg">
                                <img src={CardOne} alt="img" />
                                <div className="cardName">
                                    <h3>Our Exclusive
                                        <br /> Collection</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper >
                </div>
            </div>


        </>
    );


}
export default heroPageTwo;