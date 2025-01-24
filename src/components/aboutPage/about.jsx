import React from 'react'
import '../css/style.css';
import AboutImg from "../../images/about.png";
import AboutImgMb from '../../assets/mobileImg/aboutMobile.png';
import { IoMdMail, IoLogoWhatsapp, IoMdContact } from "react-icons/io";
function about() {

    const iconStyle = {
        width: "90px",
        height: "90px",
        color: "#d0c9c9",
    }







    return (

        <>
            <section>

                <div className="aboutImg">
                    <img className='aboutImage' src={AboutImg} alt="aboutImage" />
                    <img className='aboutImageMb' src={AboutImgMb} alt="aboutImage" />


                    <div className="aboutTextOne">
                        <h1>WHO WE ARE</h1>
                        <div className="line"></div>
                    </div>


                </div>
                <div className="aboutSec">
                    <div className="aboutText">
                        <h1>ABOUT US</h1>
                        <p>With more than 60 stores in India and over 60 premium luxury watch  brands, Capg Watches is India's largest chain of luxury watch  boutiques. We take pride in helping our customers choose the perfect  watch for themselves and their loved ones while protecting them from  rampant malpractices in India such as smuggled, fake, and refurbished  watches.</p>
                    </div>

                    <h2>6 great reasons to buy a watch from Capg</h2>

                </div>

                <div className="textsection">
                    <div className="captionSection">

                        <div className="captionText">
                            <div className="reason">

                                <h1>Authorized Retailer</h1>
                                <p>Capg is an authorized  retailer with over 60         luxury watch brands. Every  watch that we sell         comes with a brand warranty and also gets our Capg          stamp of assurance.</p>
                            </div>
                            <div className="reason">
                                <h1>Largest Selection</h1>
                                <p>With more than 60 stores and over 60 premium         luxury watch brands,  offering 5000+ varied watches         at any given time, we have one of the  largest         selections in every brand.</p>
                            </div>
                            <div className="reason">
                                <h1>Dedicated After-Sales Staff</h1>
                                <p>We value your watch as much as you do. A         dedicated team and  state-of-the-art facilities in         multiple cities ensure that your watch  ticks for         generations.</p>
                            </div>
                            <div className="reason">
                                <h1>Trust</h1>
                                <p>Employing over 500 people in India, Capg ethics         are an integral part of our DNA. You can rest         assured that your horological investment is a          genuine piece warranted by the respective brand.</p>
                            </div>
                            <div className="reason">
                                <h1>Knowledgeable Staff And Great Boutiques</h1>
                                <p>Well-trained staff and great-looking boutiques         ensure that we make  shopping for watches an         enjoyable and unforgettable experience.</p>
                            </div>
                            <div className="reason">
                                <h1>Loyalty Programme</h1>
                                <p>As a part of Ethos’ Club ECHO Loyalty Programme,         you not only get access to points that you can         collect and redeem regularly but also get  invited         to watch collector events and wine-tasting         sessions, get gifts,  rewards & more</p>
                            </div>
                        </div>

                    </div>

                </div>




                <div className="ContactIcon">
                    <h1 className="head">GET IN TOUCH</h1>
                    <div className="contactDetails">
                        <div className="contactSec">
                            <IoMdMail style={iconStyle} />
                            <div className="contactText">
                                <h1>EMAIL US</h1>
                                <h3>capg@gmail.com</h3>
                            </div>
                        </div>



                        <div className="contactSec">
                            <IoLogoWhatsapp style={iconStyle} />
                            <div className="contactText">

                                <h1>WHATSAPP</h1>
                                <h3>8270241319</h3>
                            </div>
                        </div>
                        <div className="contactSec">

                            <IoMdContact style={iconStyle} />
                            <div className="contactText">
                                <h1>CONTACT US</h1>
                                <h3>8270241319</h3>
                                <h3>6369481665</h3>
                            </div>
                        </div>
                    </div>


                </div>




            </section>

        </>




    )
}

export default about
