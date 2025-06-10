import React, { useContext, useState } from "react";

import { NavLink } from 'react-router-dom';
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
                        <NavLink to='/' style={{ color: ' #F3F1E7 ' }}>Capgs</NavLink>
                    </div>
                    <div className="navHide">
                        <div className="navCenter">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
                           <NavLink to='/collection' className={({ isActive }) => isActive ? 'active-link' : ''}>Collection</NavLink>
                            <NavLink to='/About' className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
                        </div>
                    </div>
                    <div className="navHide">
                        <div className="logDetails">
                            <NavLink to="/Cart"><span>{cart.length}</span> {< FaShoppingCart />}</NavLink>
                            {
                                check != false ?
                                    <NavLink to='/UserAccount' className="btn btn-primary" type="button">User Account</NavLink> :
                                    <button onClick={() => setvisible(true)} className="btn btn-primary" type="button">login</button>
                            }
                        </div>
                    </div>

                    <div className="menuIconTag">
                        <NavLink to="/Cart"><span>{cart.length}</span> {< FaShoppingCart />}</NavLink>


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
                       <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
                           <NavLink to='/collection' className={({ isActive }) => isActive ? 'active-link' : ''}>Collection</NavLink>
                            <NavLink to='/About' className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
                        <div className="logDetails">
                            {
                                check != false ?
                                    <NavLink to='/UserAccount' className="btn btn-primary" type="button">User Account</NavLink> :
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