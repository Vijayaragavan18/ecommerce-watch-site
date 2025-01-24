import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/style.css';
import '../css/hero.css';
import SecOne from '../../assets/mobileImg/secOne.png';
import SecTwo from '../../assets/mobileImg/secTwo.png';
import SecThree from '../../assets/mobileImg/celeb1.png';
import SecFour from '../../assets/mobileImg/celeb2.png';
import SecFive from '../../assets/mobileImg/celeb5.png';
import SecSix from '../../assets/mobileImg/celeb4.png';
import SecSeven from '../../assets/mobileImg/secThree.png';
import { motion } from 'framer-motion';

import CardOne from '../../images/card8.png';
const heroPageTwo = () => {
    const styleCenter = {
        fontWeight: "lighter",
        fontStyle: "Italic",


    }

    return (
        <>








            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}

                className="newBrandSection ">
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
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper vj"
                    >




                        <SwiperSlide>
                            <motion.div

                                whileTap={{ scale: 0.9 }}
                                className="cardImg">
                                <img src={SecOne} alt="img" />
                                <div className="cardName">
                                    <h3>Choose Your
                                        <br /> Legacy.</h3>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div

                                whileTap={{ scale: 0.9 }}
                                className="cardImg">
                                <img src={SecTwo} alt="img" />
                                <div className="cardName">
                                    <h3>The legacy of
                                        <br /> craftmanship</h3>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div

                                whileTap={{ scale: 0.9 }}
                                className="cardImg">
                                <img src={SecThree} alt="img" />
                                <div className="cardName">
                                    <h3>Our Exclusive
                                        <br /> Collection</h3>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div

                                whileTap={{ scale: 0.9 }}
                                className="cardImg">
                                <img src={SecFour} alt="img" />
                                <div className="cardName">
                                    <h3>Our Exclusive
                                        <br /> Collection</h3>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div

                                whileTap={{ scale: 0.9 }} className="cardImg">
                                <img src={SecFive} alt="img" />
                                <div className="cardName">
                                    <h3>Our Exclusive
                                        <br /> Collection</h3>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div

                                whileTap={{ scale: 0.9 }}
                                className="cardImg">
                                <img src={SecSeven} alt="img" />
                                <div className="cardName">
                                    <h3>Our Exclusive
                                        <br /> Collection</h3>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className="cardImg">
                                <img src={SecSix} alt="img" />
                                <div className="cardName">
                                    <h3>Our Exclusive
                                        <br /> Collection</h3>
                                </div>
                            </motion.div>
                        </SwiperSlide>

                    </Swiper >
                </div>
            </motion.div>


        </>
    );


}
export default heroPageTwo;