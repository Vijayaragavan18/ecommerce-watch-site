import React from 'react'
import { FaFilter } from "react-icons/fa6";
import { useState } from 'react';
import './collectionSection.css';
import AdImage from './images/adBanner.png';
import Input from './Input.jsx';

const Filter = ({ handleChange }) => {




    const filterStyle = {
        width: "42px",
        height: "42px",
        color: "#fff",
    }


    // const [nameCheck, setNameCheck] = useState("");



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


                    <div className="filterSteps">
                        <label className="sidebar-label-container">
                            <input onChange={handleChange} type="radio" value="" name="test" />
                            <span className="checkmark"></span><h3>All</h3>
                        </label>
                    </div>


                    <div className="filterProduct">
                        <div className="FilterSec">
                            <h1>Gender</h1>
                            <Input handleChange={handleChange}
                                value="MEN"
                                title='Male'
                                name='test'

                            />
                            <Input handleChange={handleChange}
                                value="WOMEN"
                                title='FeMale'
                                name='test'

                            />
                            <Input handleChange={handleChange}
                                value="BOTH"
                                title='Both'
                                name='test'

                            />
                            <Input handleChange={handleChange}
                                value="kids"
                                title='kids'
                                name='test'

                            />

                        </div>
                        <div className="FilterSec">
                            <h1>Top Brands</h1>
                            <Input handleChange={handleChange}
                                value="Rolex"
                                title='Rolex'
                                name='test'

                            />
                            <Input handleChange={handleChange}
                                value="Omega"
                                title='Omega'
                                name='test'

                            />

                        </div>
                        <div className="FilterSec">
                            <h1>Price</h1>
                            <Input handleChange={handleChange}
                                value={1}
                                title="below 1000"
                                name='test'

                            />
                            <Input handleChange={handleChange}
                                value={2}
                                title="1000-5000"
                                name='test'

                            />
                            <Input handleChange={handleChange}
                                value={3}
                                title='5000-10000'
                                name='test'

                            />
                            <Input handleChange={handleChange}
                                value={4}
                                title='10000-20000'
                                name='test'

                            />
                            <Input handleChange={handleChange}
                                value={5}
                                title='20000 Above'
                                name='test'

                            />
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

export default Filter;