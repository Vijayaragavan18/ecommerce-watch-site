import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../css/style.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/style.css';
const heroPage = () => {
    const styleCss = {
        fontWeight: "bold",
        fontStyle: "Italic",


    }

    return (
        <>




            {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
 */}







            <Swiper
                // spaceBetween={30}
                // centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slideShow">
                        <div className="heroImg">
                            vj
                        </div>
                        <div className="heroTexts">
                            <h3><span style={{ fontWeight: "bold" }}> Dont ever trust</span> a man who wears
                                <br /> his watch on the <span style={styleCss}>wrong wrist </span></h3>
                            <a href="./"><button >LEARN MORE</button></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideShow">
                        <div className="heroImg">
                            vj
                        </div>
                        <div className="heroTexts">
                            <h3><span style={{ fontWeight: "bold" }}> Dont ever trust</span> a man who wears
                                <br /> his watch on the <span style={styleCss}>wrong wrist </span></h3>
                            <a href="./"><button >LEARN MORE</button></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideShow">
                        <div className="heroImg">
                            vj
                        </div>
                        <div className="heroTexts">
                            <h3><span style={{ fontWeight: "bold" }}> Dont ever trust</span> a man who wears
                                <br /> his watch on the <span style={styleCss}>wrong wrist </span></h3>
                            <a href="./"><button >LEARN MORE</button></a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>

    );

}
export default heroPage;
