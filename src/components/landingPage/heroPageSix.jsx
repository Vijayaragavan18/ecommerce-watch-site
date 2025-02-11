import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import Rolex from '../../images/Layer2.png';
import Omega from '../../images/Layer3.png';
import Richard from '../../images/Layer5.png';
import Jacob from '../../images/Layer4.png';
import Casio from '../../images/Layer6.png';
import Timex from '../../images/Layer7.png';
import Eight from '../../images/Layer8.png';

import HeroBanner from '../../images/heroBanner.png';
const heroPageSix = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateY: "10%" }}
                whileInView={{ opacity: 1, translateY: 0 }}

                transition={{ duration: 1 }} className="partnerDetails">
                <div className="partnerHead">
                    <h1>OUR PARTNERS</h1>
                </div>
                <div className="partnerBanner">
                    <div className="partnerBannerImg">
                        <img src={HeroBanner} alt="heroPage" />
                    </div>
                </div>
                <div className="secMar">
                    <div className="marqueeSection">


                        <Marquee loop={0} speed={100}>
                            <div className="brand">
                                <div className="brandImage">
                                    <img src={Rolex} alt="rolexWatch" />
                                </div>
                                <div className="brandImage">
                                    <img src={Omega} alt="rolexWatch" />
                                </div>
                                <div className="brandImage">
                                    <img src={Richard} alt="rolexWatch" />
                                </div>
                                <div className="brandImage">
                                    <img src={Jacob} alt="rolexWatch" />
                                </div>
                                <div className="brandImage">
                                    <img src={Timex} alt="rolexWatch" />
                                </div>
                            </div>
                            <div className="brand">
                                <div className="brandImage">
                                    <img src={Rolex} alt="rolexWatch" />
                                </div>
                                <div className="brandImage">
                                    <img src={Omega} alt="rolexWatch" />
                                </div>
                                <div className="brandImage">
                                    <img src={Richard} alt="rolexWatch" />
                                </div>
                                <div className="brandImage">
                                    <img src={Jacob} alt="rolexWatch" />
                                </div>
                                <div className="brandImage">
                                    <img src={Casio} alt="rolexWatch" />
                                </div>
                            </div>
                        </Marquee>



                    </div>

                </div>




            </motion.div >

        </>
    )
}
export default heroPageSix;