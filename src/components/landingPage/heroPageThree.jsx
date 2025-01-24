import React from "react";
import '../css/hero.css';
import Arrival from '../../images/card8.png';
import { motion } from 'framer-motion';

import HeroPageOne from '../../assets/mobileImg/heroOne.png';
import HeroPageTwo from '../../assets/mobileImg/heroTwo.png';
import HeroPageThree from '../../assets/mobileImg/heroThree.png';
import HeroPageFour from '../../assets/mobileImg/heroFour.png';



import ImgOne from '../../assets/mobileImg/imgOne.png';
import ImgTwo from '../../assets/mobileImg/imgTwo.png';
import ImgThree from '../../assets/mobileImg/imgThree.png';
import ImgFour from '../../assets/mobileImg/imgFour.png';
import ImgFive from '../../assets/mobileImg/imgFive.png';
import ImgSix from '../../assets/mobileImg/imgSix.png';





import { Link } from 'react-router-dom';

const heroPageThree = () => {
    return (
        <>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="arrivalHead">
                <h3>Latest Arrival</h3>
                <h3>LATEST ARRIVAL</h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="arrivalCardSection">

                <motion.div

                    whileHover={{ scale: 1.08 }}
                    className="arrivalCard">
                    <img src={ImgOne} alt="ArrivalImage" />
                    <Link to='/collection'><motion.button whileTap={{ scale: 0.8 }} className="arrivalBtn">LEARN MORE</motion.button></Link>
                </motion.div>

                <motion.div

                    whileHover={{ scale: 1.08 }}
                    className="arrivalCard">
                    <img src={ImgTwo} alt="ArrivalImage" />
                    <Link to='/collection'><motion.button whileTap={{ scale: 0.8 }} className="arrivalBtn">LEARN MORE</motion.button></Link>
                </motion.div>
                <motion.div

                    whileHover={{ scale: 1.08 }}
                    className="arrivalCard">
                    <img src={ImgThree} alt="ArrivalImage" />
                    <Link to='/collection'><motion.button whileTap={{ scale: 0.8 }} className="arrivalBtn">LEARN MORE</motion.button></Link>
                </motion.div>
                <motion.div

                    whileHover={{ scale: 1.08 }}
                    className="arrivalCard">
                    <img src={ImgFour} alt="ArrivalImage" />
                    <a href="./"><motion.button whileTap={{ scale: 0.8 }} className="arrivalBtn">LEARN MORE</motion.button></a>
                </motion.div>

                <motion.div

                    whileHover={{ scale: 1.08 }}
                    className="arrivalCard">
                    <img src={ImgFive} alt="ArrivalImage" />
                    <Link to='/collection'><motion.button whileTap={{ scale: 0.8 }} className="arrivalBtn">LEARN MORE</motion.button></Link>
                </motion.div>

                <motion.div

                    whileHover={{ scale: 1.08 }}
                    className="arrivalCard">
                    <img src={ImgSix} alt="ArrivalImage" />
                    <Link to='/collection'><motion.button whileTap={{ scale: 0.8 }} className="arrivalBtn">LEARN MORE</motion.button></Link>
                </motion.div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="arrivalCardSectionTwo">



                <div

                    whileHover={{ scale: 1.08 }} className="arrivalCard">
                    <img src={HeroPageOne} alt="ArrivalImage" />
                    <Link to='/collection'><motion.button whileTap={{ scale: 0.8 }} className="arrivalBtn">LEARN MORE</motion.button></Link>
                </div>

                <motion.div

                    whileHover={{ scale: 1.08 }} className="arrivalCard">
                    <img src={HeroPageTwo} alt="ArrivalImage" />
                    <Link to='/collection'><motion.button whileTap={{ scale: 0.8 }} className="arrivalBtn">LEARN MORE</motion.button></Link>
                </motion.div>

                <motion.div

                    whileHover={{ scale: 1.08 }} className="arrivalCard">
                    <img src={HeroPageThree} alt="ArrivalImage" />
                    <Link to='/collection'><motion.button whileTap={{ scale: 0.8 }} className="arrivalBtn">LEARN MORE</motion.button></Link>
                </motion.div>
                <motion.div

                    whileHover={{ scale: 1.08 }} className="arrivalCard">
                    <img src={HeroPageFour} alt="ArrivalImage" />
                    <Link to='/collection'><motion.button whileTap={{ scale: 0.8 }} className="arrivalBtn">LEARN MORE</motion.button></Link>
                </motion.div>







            </motion.div>











        </>
    )

}
export default heroPageThree;