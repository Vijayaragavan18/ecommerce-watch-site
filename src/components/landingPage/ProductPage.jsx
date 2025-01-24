import React from 'react'
import '../css/hero.css';
import { useContext } from 'react'
import { cartContext } from '../../connect';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const ProductPage = ({ products }) => {


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
                whileHover={{ scale: 1.1 }} className="exploreSec" key={products.id}>
                <div className="exploreImage"> <Link to={`/viewCart/${products.id}`} ><img src={brandImage[products.image]} alt="exploreImg" /> </Link></div>
                <div className="exploreText">
                    <h2>{productName}</h2>
                    <h3>{products.price_formatted}</h3>
                </div>
            </motion.div>












        </>
    )
}

export default ProductPage