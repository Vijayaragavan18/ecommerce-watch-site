import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import '../css/style.css';

import { FaShoppingCart } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenuOutline } from "react-icons/io5";
import { cartContext } from "../../connect";
import LogPage from "./logPage";

const NavBar = () => {

    const { check, setCheck, cart, visible, setvisible, dataValue, showReg, setShowReg, input, setinput } = useContext(cartContext);
    const objectLen = Object.keys(input).length;
    const [isOpen, setIsOpen] = useState(false);


    console.log(objectLen)


    return (
        <>
            <div className="nav1">
                <div className="navBarSection">
                    <div className="logoImg">
                        <Link to='/' style={{ color: ' #F3F1E7 ' }}>Capgs</Link>
                    </div>
                    <div className="navHide">
                        <div className="navCenter">
                            <Link to='/'>Home</Link>
                            <Link to='/collection'>Collection</Link>
                            <Link to='/About'>About</Link>
                        </div>
                    </div>
                    <div className="navHide">
                        <div className="logDetails">
                            <Link to="/Cart"><span>{cart.length}</span> {< FaShoppingCart />}</Link>
                            {
                                check != false ?
                                    <Link to='/UserAccount' className="btn btn-primary" type="button">User Account</Link> :
                                    <button onClick={() => setvisible(true)} className="btn btn-primary" type="button">login</button>
                            }
                        </div>
                    </div>

                    <div className="menuIconTag">
                        <Link to="/Cart"><span>{cart.length}</span> {< FaShoppingCart />}</Link>


                        {isOpen == false ?
                            <div onClick={() => setIsOpen(true)} className="menuIconSec">
                                <IoMenuOutline className="menuIcon" />
                            </div> :
                            <div onClick={() => setIsOpen(false)} className="menuIconSec">
                                <VscChromeClose className="menuIcon" />
                            </div>
                        }

                    </div>


                </div>
            </div>


            {isOpen &&
                <div className="menuSec" onClick={() => setIsOpen(false)}>
                    <div className="menuSideBar">
                        <Link to='/'>Home</Link>
                        <Link to='/collection'>Collection</Link>
                        <Link to='/About'>About</Link>
                        <div className="logDetails">
                            {
                                check != false ?
                                    <Link to='/UserAccount' className="btn btn-primary" type="button">User Account</Link> :
                                    <button onClick={() => setvisible(true)} className="btn btn-primary" type="button">login</button>
                            }
                        </div>
                    </div>
                </div>
            }





            {visible &&
                <LogPage onClose={() => setvisible(false)} />
            }













        </>


    );





}
export default NavBar;