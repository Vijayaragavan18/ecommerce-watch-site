import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import './cart.css';
import { MdDelete } from "react-icons/md";
import { cartContext } from '../../connect';
import { Link } from 'react-router-dom';
import AdressPage from '../landingPage/address.jsx';
import LogPage from "../landingPage/logPage.jsx";
import UserPage from '../userAccount/UserPage.jsx';
const Cart = () => {

    var [total, setTotal] = useState(0);
    const { visible, setvisible, adressPage, setAdressPage, check, cart, setCart, products, brandImage } = useContext(cartContext);
    const removeCart = (id) => {
        setCart(cart.filter((c) => c.id !== id));
    }

    useEffect(() => {
        setTotal(cart.reduce((acc, c) => acc + parseInt(c.price), 0));
    }, [cart])
    console.log(cart.includes(products));
    return (
        <>

            <div className="cartSection1">

                <div className="cartDetails">
                    <div className="addCartSec">
                        {
                            total === 0 ? <div className="emptyMsg">
                                <h1>your cart is empty is empty dude</h1>
                            </div> : ""
                        }


                        {
                            cart.map((cartItem, index) => (
                                <div className="cartSec" key={cartItem.id}>
                                    <div className="cartImg">
                                        <Link to={`/viewCart/${cartItem.id}`}> <img src={brandImage[cartItem.image]} alt="image" /> </Link>

                                    </div>

                                    <div className="brandName">

                                        <h1>{cartItem.name}</h1>
                                    </div>
                                    <div className="brandPrice">
                                        <h1>{cartItem.price_formatted}</h1>
                                    </div>
                                    <div className="deleteSec">
                                        <MdDelete className='deleteIcon' onClick={() => removeCart(cartItem.id)} />
                                    </div>
                                </div>
                            ))
                        }



                    </div>
                    {
                        total > 0 ? <div className="continue">
                            <div className="totalSec">
                                <h1>Total Amount:${total}</h1>
                            </div>
                            <div className="continueBtn">

                                {check != false ?
                                    <Link to='/UserAccount' > <button onClick={() => setAdressPage(true)}>Next</button></Link>
                                    :
                                    <button onClick={() => setvisible(true)}>Continue</button>
                                }

                            </div>
                        </div>
                            : ""
                    }
                </div>

            </div>




            {visible &&
                <LogPage onClose={() => setvisible(false)} />
            }



        </>
    )
}

export default Cart