import React from "react";
import '../css/style.css';
import '../css/hero.css';
import { Link } from "react-router-dom";
const footer = () => {

    const copyRight = {
        fontWeight: "bold",
    }

    return (
        <>
            <div className="footerSection">
                <div className="footerSecOne">

                    <div className="footerDetails">
                        <h1>CAPGS</h1>
                        <p>The perfect  watch for themselves and their loved ones while protecting them from  rampant malpractices in India such as smuggled, fake, and refurbished  watches. </p>
                    </div>

                    <div className="footerNav">

                        <Link to="/">HOME</Link>

                        <Link to="/Collection">COLLECTION</Link>
                        <Link to="/About">ABOUT</Link>

                    </div>
                </div>


                <div className="copyRightTag">
                    <div className="underLine">

                    </div>
                    <h1>@2024 Copyright. <span style={copyRight}> CAPG Booking </span></h1>
                </div>
            </div>

        </>
    );
}
export default footer;