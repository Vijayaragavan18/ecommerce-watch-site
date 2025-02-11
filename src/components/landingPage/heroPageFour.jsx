import React from "react";
import { useContext, useState } from 'react'
import { cartContext } from '../../connect.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import Watch1 from '../../assets/mobileImg/watchOne.png';
import Watch2 from '../../assets/mobileImg/watchTwo.png';
import Watch3 from '../../assets/mobileImg/watchThree.png';
import Watch4 from '../../assets/mobileImg/watchFour.png';
import Watch5 from '../../assets/mobileImg/watchFive.png';
import Watch6 from '../../assets/mobileImg/watchSix.png';
import Watch7 from '../../assets/mobileImg/watchSeven.png';
import Watch8 from '../../assets/mobileImg/watchEight.png';
import ProductPageHero from '../landingPage/ProductPage.jsx'
import ProductPageHeroMb from '../landingPage/ProductPageMB.jsx';





const HeroPageFour = () => {

    const { products } = useContext(cartContext);

    const [currentPage, setcurrentPage] = useState(1);
    const [postPerPage, setpostPerPage] = useState(8);

    const lastPage = currentPage * postPerPage;
    const firstPage = lastPage - postPerPage;
    const currentPost = products.slice(firstPage, lastPage);







    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateY: "10%" }}

                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1 }} className="collectionHead">
                <h2>EXPLORE COLLECTION</h2>
                <h2>OUR EXCLUSIVE COLLECTION</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: "10%" }}

                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1 }} className="exploreAllCards">

                {currentPost.map((product) => (

                    <ProductPageHero key={product.id} products={product} />

                ))}





            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: "10%" }}

                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1 }} className="watchSection">



                <Swiper
                    // slidesPerView={1}
                    // spaceBetween={}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        100: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },

                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >


                    {currentPost.map((product) => (

                        <ProductPageHeroMb key={product.id} products={product} />

                    ))}


                </Swiper >
            </motion.div>



        </>
    )

}
export default HeroPageFour;