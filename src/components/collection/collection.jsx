import React, { useState } from "react";

import ProductAsset from '../../assets/product.json';
import bannerOne from './images/collectionBanner.png';
import './collectionSection.css';
import Filter from './filter';
import CartSec from './CartSection';
import BannerTwo from './images/collectionBannerTwo.png';
const Collection = () => {




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
                                            <h4>1200</h4>
                                        </div>
                                        <div className="serviceList">
                                            <h2>CUSTOMERS</h2>
                                            <h4>20L</h4>
                                        </div>
                                        <div className="serviceList">
                                            <h2>AWARDS RECEIVED</h2>
                                            <h4>300</h4>
                                        </div>
                                        <div className="serviceList">
                                            <h2>BRANCHES</h2>
                                            <h4>76</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>







                    </div>
                </div>



                <div className="filterCard">
                    <div className="filterSection">
                        <Filter />
                    </div>

                    <CartSec />


                </div>


                <div className="bannerTwo">
                    <img src={BannerTwo} alt="bannerTwo" />

                </div>







            </section>

        </>
    )
}
export default Collection;