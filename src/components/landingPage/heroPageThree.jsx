import React from "react";
import '../css/hero.css';
import Arrival from '../../images/card8.png';
const heroPageThree = () => {
    return (
        <>

            <div className="arrivalHead">
                <h3>Latest Arrival</h3>
                <h3>LATEST ARRIVAL</h3>
            </div>

            <div className="arrivalCardSection">

                <div className="arrivalCard">
                    <img src={Arrival} alt="ArrivalImage" />
                    <a href="./"><button className="arrivalBtn">LEARN MORE</button></a>
                </div>

                <div className="arrivalCard">
                    <img src={Arrival} alt="ArrivalImage" />
                    <a href="./"><button className="arrivalBtn">LEARN MORE</button></a>
                </div>
                <div className="arrivalCard">
                    <img src={Arrival} alt="ArrivalImage" />
                    <a href="./"><button className="arrivalBtn">LEARN MORE</button></a>
                </div>
                <div className="arrivalCard">
                    <img src={Arrival} alt="ArrivalImage" />
                    <a href="./"><button className="arrivalBtn">LEARN MORE</button></a>
                </div>

                <div className="arrivalCard">
                    <img src={Arrival} alt="ArrivalImage" />
                    <a href="./"><button className="arrivalBtn">LEARN MORE</button></a>
                </div>

                <div className="arrivalCard">
                    <img src={Arrival} alt="ArrivalImage" />
                    <a href="./"><button className="arrivalBtn">LEARN MORE</button></a>
                </div>

            </div>


        </>
    )

}
export default heroPageThree;