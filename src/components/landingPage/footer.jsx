import React from "react";
import '../css/style.css';
import '../css/hero.css';
import { NavLink } from 'react-router-dom';
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

                        <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
                        <NavLink to='/collection' className={({ isActive }) => isActive ? 'active-link' : ''}>Collection</NavLink>
                        <NavLink to='/About' className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>

                    </div>
                </div>
                <div className="underLine">

                </div>

                <div className="copyRightTag">

                    <h1>@2025 Copyright. <span style={copyRight}> CAPG Booking </span></h1>
                </div>
            </div>

        </>
    );
}
export default footer;