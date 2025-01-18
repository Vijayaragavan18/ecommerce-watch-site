import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import '../css/style.css';

import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from "../../connect";
import LogPage from "./logPage";

const NavBar = () => {

    const { check, setCheck, cart, visible, setvisible, dataValue, showReg, setShowReg, input, setinput } = useContext(cartContext);
    const objectLen = Object.keys(input).length;
    // if (Object.values(input).some(value => Boolean(value))) {
    //     console.log('At least one field has a value');
    // } else {
    //     console.log('No fields have a value');
    // }

    console.log(objectLen)


    return (
        <>
            <div className="nav1">
                <div className="navBarSection">
                    <div className="logoImg">
                        <Link to='/' style={{ color: ' #F3F1E7 ' }}>Capgs</Link>
                    </div>
                    <div className="navCenter">
                        <Link to='/'>Home</Link>
                        <Link to='/collection'>Collection</Link>
                        <Link to='/About'>About</Link>
                    </div>
                    <div className="logDetails">
                        <Link to="/Cart"><span>{cart.length}</span> {< FaShoppingCart />}</Link>
                        {
                            check != false ?

                                <Link to='/UserAccount' className="btn btn-primary" type="button">User Account</Link> :
                                <button onClick={() => setvisible(true)} className="btn btn-primary" type="button">login</button>
                        }
                    </div>
                </div>
            </div>



            {visible &&
                <LogPage onClose={() => setvisible(false)} />
            }













        </>


    );





}
export default NavBar;