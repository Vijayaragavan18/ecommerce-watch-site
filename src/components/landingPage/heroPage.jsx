import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import BgOne from '../../assets/productImage/bg1.png';
import BgTwo from '../../assets/productImage/bg2.jpg';
import BgThree from '../../assets/productImage/bgOne.png';
import { Link } from 'react-router-dom';
import MbOne from '../../assets/mobileImg/one.png';
import MbTwo from '../../assets/mobileImg/two.png';
import MbThree from '../../assets/mobileImg/three.png';



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





      Jacob & Co's Latest India Edition:
The 'Wonders Of India'
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
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slideShow">

                        <div className="heroImg">
                            <img src={BgOne} className="oneImg" alt="bgImage" />
                            <img src={MbThree} className="TwoImg" alt="bgImage" />
                            <div className="heroTexts">
                                <h3><span style={{ fontWeight: "bold" }}> Dont ever trust</span> a man who wears
                                    <br /> his watch on the <span style={styleCss}>wrong wrist </span></h3>
                                <Link to='/collection'><button >LEARN MORE</button></Link>
                            </div>

                            <div className="heroTextsHide">
                                <h3> Dont ever trust a man who wears
                                    his watch on thewrong wrist </h3>
                                <Link to='/collection'><button >LEARN MORE</button></Link>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideShow">
                        <div className=" heroImgTwo">
                            <img src={BgTwo} className="oneImg" alt="bgImage" />
                            <img src={MbOne} className="TwoImg" alt="bgImage" />
                            <div className="heroTextsTwo">
                                <Link to='/collection'><button >LEARN MORE</button></Link>
                            </div>
                            <div className="heroTextsHide">
                                <Link to='/collection'><button >LEARN MORE</button></Link>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideShow">
                        <div className="heroImgThree">
                            <img src={BgThree} className="oneImg" alt="bgImage" />
                            <img src={MbTwo} className="TwoImg" alt="bgImage" />
                            <div className="heroTextsThree">
                                <h3>No wonder, it's a wonder</h3>
                                <Link to='/collection'><button >LEARN MORE</button></Link>
                            </div>
                            <div className="heroTextsThreeHide">
                                <h3>No wonder, it's a wonder</h3>
                                <Link to='/collection'><button >LEARN MORE</button></Link>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </>

    );

}
export default heroPage;
