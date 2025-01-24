import React from 'react'
import '../css/hero.css';
import { useContext } from 'react'
import { cartContext } from '../../connect';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const ProductPageMB = ({ products }) => {


    const { cart, setCart, brandImage } = useContext(cartContext);
    const productName = products.name.length > 20 ? products.name.substring(0, 10) + "..." : products.name;
    console.log(cart);

    const addCart = () => {
        setCart([...cart, products]);
    }
    const removeCart = () => {
        setCart(cart.filter((c) => c.id !== products.id));
    }



    return (
        <>

            <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 0.9 }} className="cardImgOne" key={products.id}>
                <Link to={`/viewCart/${products.id}`} >  <img src={brandImage[products.image]} alt="img" /> </Link>
                <div className="exploreTextMb">
                    <h2>{productName}</h2>
                    <h3>{products.price_formatted}</h3>
                </div>
            </motion.div>











        </>
    )
}

export default ProductPageMB