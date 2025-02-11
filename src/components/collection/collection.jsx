import React, { useState } from "react";
import CountUp from "react-countup";
import { motion } from 'framer-motion';
import ProductAsset from '../../assets/product.json';
import bannerOne from './images/collectionBanner.png';
import './collectionSection.css';
import Filter from './filter';
import CartSec from './CartSection';
import BannerTwo from './images/collectionBannerTwo.png';
import products from '../../assets/product.json';
import { MdFilterAlt } from "react-icons/md";
const Collection = () => {
    const filterStyle = {
        width: "42px",
        height: "42px",
        color: "#fff",
    }


    const [selectedCategory, setSelectedCategory] = useState(null);
    const [display, setDisplay] = useState(false);


    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };


    function filteredData(products, selected) {
        let filteredProducts = products;

        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ brand, type, priceRange }) =>
                    brand === selected ||
                    type === selected ||
                    priceRange === selected
            );






        }
        return filteredProducts;




    }
    const result = filteredData(products, selectedCategory);

    return (
        <>
            <section>


                <div className="quotes">
                    <h1>“Elegance never goes out of style”</h1>
                </div>

                <div className="serviceSection">

                    <div className="collectionBanner">
                        <div className="bannerImg">
                            <img src={bannerOne} alt="bannerImg" />
                            <div className="bannerHead">
                                <h1>WATCHES</h1>
                            </div>




                            <div className="allServices">

                                <div className="serviceText">
                                    <div className="services">
                                        <div className="serviceList">
                                            <h2>SOLD OUT /24hr</h2>
                                            <h4><CountUp start={0}
                                                end={1200}
                                                duration={4} /></h4>
                                        </div>
                                        <div className="serviceList">
                                            <h2>CUSTOMERS</h2>
                                            <h4><CountUp start={0}
                                                end={20}
                                                duration={3} />L</h4>
                                        </div>
                                        <div className="serviceList">
                                            <h2>AWARDS RECEIVED</h2>
                                            <h4><CountUp start={0}
                                                end={300}
                                                duration={4} /></h4>
                                        </div>
                                        <div className="serviceList">
                                            <h2>BRANCHES</h2>
                                            <h4><CountUp start={0}
                                                end={76}
                                                duration={5} /></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>







                    </div>
                </div>

                <div className="filterIconMb">

                    <div className="filterIconMbSizz">
                        <MdFilterAlt onClick={() => setDisplay(true)} className="filterIconMbSiz" style={filterStyle} />
                    </div>

                </div>



                {

                    display &&

                    <div className="menuSec2" >

                        <Filter handleChange={handleChange} />



                    </div>






                }

                <div className="filterCard">
                    <div className="filterSection">
                        <Filter handleChange={handleChange} />
                    </div>
                    <CartSec result={result} />




                </div>









                <div className="bannerTwo">
                    <img src={BannerTwo} alt="bannerTwo" />

                </div>







            </section >

        </>
    )
}
export default Collection;