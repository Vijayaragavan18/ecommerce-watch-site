import React from "react";

import '../css/hero.css';
import Achievement from '../../images/card8.png';
const heroPageFive = () => {

    return (
        <>
            <div className="arrivalHead">
                <h3>CAPGS</h3>
                <h3>OUR ACHIEVEMENTS</h3>
            </div>

            <div className="achievementSection">
                <div className="sectionOne">
                    <div className="achievementImage"><img src={Achievement} alt="Achievement" /></div>
                    <div className="achievementText">
                        <div className="achieveDetails">
                            <h5>Center orchestra seats</h5>
                            <h1>The novel is more of a whisper <br />
                                whereas the stage is a shout</h1>
                            <p>The IMAX theatre is scheduled to open in the spring of 2022.
                                In a press release, Imax Corporation said the new theatre
                                would feature IMAX with laser technology, a next-generation
                                laser projection system and a 12-channel sound system
                                exclusive to IMAX theatres.</p>
                        </div>
                        <a href="./"><button>LEARN MORE</button></a>
                    </div>
                </div>
                <div className="sectionOne">

                    <div className="achievementText">
                        <div className="achieveDetails">
                            <h5>Center orchestra seats</h5>
                            <h1>The novel is more of a whisper <br />
                                whereas the stage is a shout</h1>
                            <p>The IMAX theatre is scheduled to open in the spring of 2022.
                                In a press release, Imax Corporation said the new theatre
                                would feature IMAX with laser technology, a next-generation
                                laser projection system and a 12-channel sound system
                                exclusive to IMAX theatres.</p>
                        </div>
                        <a href="./"><button>LEARN MORE</button></a>
                    </div>

                    <div className="achievementImage"><img src={Achievement} alt="Achievement" /></div>

                </div>

            </div>

        </>
    )

}
export default heroPageFive;