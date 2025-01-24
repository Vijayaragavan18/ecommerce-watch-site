import React, { useContext } from 'react'

import '../collection/collectionSection.css';
import { cartContext } from '../../connect';
// import ProductImage from './productImage';

import { Link } from 'react-router-dom';
const ProductCart = ({ products }) => {

    const { cart, setCart, brandImage } = useContext(cartContext);
    const productName = products.name.length > 20 ? products.name.substring(0, 10) + "..." : products.name;
    console.log(cart);

    const addCart = () => {
        setCart([...cart, products]);
    }
    const removeCart = () => {
        setCart(cart.filter((c) => c.id !== products.id));
    }
    console.log(cart.includes(products));


    return (
        <>







            <div className="cardSection2" >


                <div className="productContainer" >
                    <div className="cardDetails" key={products.id}>
                        <div className="cardImage" >

                            <Link to={`/viewCart/${products.id}`} >  <img src={brandImage[products.image]} alt="brandImage" /></Link>
                            {
                                cart.includes(products) ? <div onClick={removeCart} className=" addCartTextRem">
                                    <p>  REM <br />
                                        CART </p>
                                </div> : <div onClick={addCart} className="addCartText">
                                    <p> ADD <br />
                                        CART </p>
                                </div>
                            }

                        </div>
                        <div className="cardText">
                            <h1>{productName}</h1>
                            <p>{products.price_formatted}</p>
                        </div>
                    </div >
                </div>

            </div>




            {/* <div className="cardSection2" >


                <div className="productContainer" >
                    <div className="cardDetails" key={products.id}>
                        <div className="cardImage" >

                            <Link to={`/viewCart/${products.id}`} >  <img src={brandImage[products.image]} alt="brandImage" /></Link>
                            {
                                cart.includes(products) ? <div onClick={removeCart} className=" addCartTextRem">
                                    <p>  REM <br />
                                        CART </p>
                                </div> : <div onClick={addCart} className="addCartText">
                                    <p> ADD <br />
                                        CART </p>
                                </div>
                            }

                        </div>
                        <div className="cardText">
                            <h1>{productName}</h1>
                            <p>{products.price_formatted}</p>
                        </div>
                    </div >
                </div>

            </div> */}







        </>
    )
}


export default ProductCart