import React from "react";
import { motion } from 'framer-motion';
import '../css/hero.css';
import Achievement from '../../images/card8.png';
import GirlImg from '../../assets/mobileImg/girlImg.png';
import GirlImgTwo from '../../assets/mobileImg/girlImgTwo.png';
import { Link } from 'react-router-dom';
const heroPageFive = () => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }} v className="arrivalHead">
                <h3>CAPGS</h3>
                <h3>OUR ACHIEVEMENTS</h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }} className="lapScreenSize">
                <div className="achievementSection">
                    <div className="sectionOne">
                        <div className="achievementImage"><img src={GirlImg} alt="Achievement" /></div>
                        <div className="achievementText">
                            <div className="achieveDetails">
                                <h5>Versace Rive Swiss Made</h5>
                                <h1>A watch is a great
                                    <br />
                                    gift for a man </h1>
                                <p>Founded in 1978 in Milan,Gianni Versace S.r.l is one of the leading  international fashion design houses and a symbol of Italian luxury  world-wide. It designs, manufactures, distributes and retails fashion  and lifestyle products .</p>
                            </div>
                            <Link to='/collection'><button>LEARN MORE</button></Link>

                        </div>
                    </div>
                    <div className="sectionOne">
                        <div className="achievementText">
                            <div className="achieveDetails">
                                <h5>40 Years Of Iconic style</h5>
                                <h1>Experience the timeless allure
                                    <br />
                                    of sparkle and shine with GUESS </h1>
                                <p>Our  40th Anniversary Limited Edition Capsule has arrived.
                                    These styles are  adorned with crystals from bezel to bracelet.
                                </p>
                            </div>
                            <Link to='/collection'><button>LEARN MORE</button></Link>
                        </div>
                        <div className="achievementImage"><img src={GirlImgTwo} alt="Achievement" /></div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }} className="mbScreen">
                <div className="cardImgTwo">
                    <img src={GirlImg} alt="img" />
                    <div className="cardNameOne">
                        <div className="achievementText">
                            <div className="achieveDetails">
                                <h5>Versace Rive Swiss Made</h5>
                                <h1>A watch is a great gift for a man </h1>
                                <p>TFounded in 1978 in Milan,Gianni Versace S.r.l is one of the leading  international fashion design houses and a symbol of Italian luxury  world-wide. It designs, manufactures, distributes and retails fashion  and lifestyle products .</p>
                            </div>
                            <Link to='/collection'><button>LEARN MORE</button></Link>
                        </div>
                    </div>
                </div>
                <div className="cardImgTwo">
                    <img src={GirlImgTwo} alt="img" />
                    <div className="cardNameOne">
                        <div className="achievementText">
                            <div className="achieveDetails">
                                <h5>40 Years Of Iconic style</h5>
                                <h1>Experience the timeless allure
                                    of sparkle and shine with GUESS </h1>
                                <p> Our  40th Anniversary Limited Edition Capsule has arrived.
                                    These styles are  adorned with crystals from bezel to bracelet.
                                </p>
                            </div>
                            <Link to='/collection'><button>LEARN MORE</button></Link>
                        </div>
                    </div>
                </div>
            </motion.div>












        </>
    )

}
export default heroPageFive;