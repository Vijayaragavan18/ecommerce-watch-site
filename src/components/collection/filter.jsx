import React from 'react'
import { FaFilter } from "react-icons/fa6";
import './collectionSection.css';
import AdImage from './images/adBanner.png';
const filter = () => {

    const filterStyle = {
        width: "42px",
        height: "42px",
        color: "#fff",
    }

    return (
        <>
            <div className="filterDetails">

                <div className="allFilters">
                    <div className="filterHead">
                        <h1>FILTER</h1>
                        <div className="filterIcon">
                            <FaFilter style={filterStyle} />
                        </div>
                    </div>
                    <div className="filterProduct">
                        <div className="FilterSec">
                            <h1>Gender</h1>
                            <div className="filterSteps">
                                <input id='Male' type="checkbox" />
                                <label htmlFor="Male">Male</label>
                            </div>
                            <div className="filterSteps">
                                <input id="Female" type="checkbox" />
                                <label htmlFor="Female">Female</label>
                            </div>
                        </div>
                        <div className="FilterSec">
                            <h1>Brands</h1>
                            <div className="filterSteps">
                                <input id='Rolex' type="checkbox" />
                                <label htmlFor="Rolex">Rolex</label>
                            </div>
                            <div className="filterSteps">
                                <input id="Omega" type="checkbox" />
                                <label htmlFor="Omega">Omega</label>
                            </div>
                        </div>
                        <div className="FilterSec">
                            <h1>Price</h1>
                            <div className="filterSteps">
                                <input id='500' type="checkbox" />
                                <label htmlFor="500">500-1000</label>
                            </div>
                            <div className="filterSteps">
                                <input id="3000" type="checkbox" />
                                <label htmlFor="3000">1000-3000</label>
                            </div>
                            <div className="filterSteps">
                                <input id="4000" type="checkbox" />
                                <label htmlFor="4000">4000-8000</label>
                            </div>
                        </div>
                    </div>
                    <div className="adSection">
                        <div className="adImg">
                            <img src={AdImage} alt="addImage" />
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default filter;