import React, { useContext, useState } from 'react'


import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Data from '../../assets/product.json';

import ProductSec from '../collection/ProductCart';
import './collectionSection.css';
// import Brand1 from '../../assets/productImage/brand.png';
// import Brand2 from '../../assets/productImage/brand1.png';
// import Brand3 from '../../assets/productImage/brand2.png';
// import Brand4 from '../../assets/productImage/brand.png';
// import Brand5 from '../../assets/productImage/brand4.png';
// import Brand6 from '../../assets/productImage/brand5.png';
// import Brand7 from '../../assets/productImage/brand6.png';
// import Brand8 from '../../assets/productImage/brand7.png';
// import Brand9 from '../../assets/productImage/brand8.png';
// import Brand10 from '../../assets/productImage/brand9.png';
// import Brand11 from '../../assets/productImage/brand10.png';
// import Brand12 from '../../assets/productImage/brand7.png';
import Pagination from './pagination.jsx';
import { cartContext } from '../../connect.jsx';
//jsx must have only one element


const CartSection = () => {

    // const brandImage = {

    //     "brand1": Brand1,
    //     "brand2": Brand2,
    //     "brand3": Brand3,
    //     "brand4": Brand4,
    //     "brand5": Brand5,
    //     "brand6": Brand6,
    //     "brand7": Brand7,
    //     "brand8": Brand8,
    //     "brand9": Brand9,
    //     "brand10": Brand10,
    //     "brand11": Brand11,
    //     "brand12": Brand12,
    // }

    const { products } = useContext(cartContext);

    const [currentPage, setcurrentPage] = useState(1);
    const [postPerPage, setpostPerPage] = useState(12);

    const lastPage = currentPage * postPerPage;
    const firstPage = lastPage - postPerPage;
    const currentPost = products.slice(firstPage, lastPage);
    // let pages = [];
    // let totalPost = products.length;
    // for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    //     pages.push(i);
    // }





    return (
        <>
            <div className="allCard">



                <Pagination totalPost={products.length} setcurrentPage={setcurrentPage} postPerPage={postPerPage} />




                <div className="cardSection">
                    {currentPost.map((product) => (
                        <ProductSec key={product.id} products={product} />

                    ))}

                </div>

                <Pagination totalPost={products.length} setcurrentPage={setcurrentPage} postPerPage={postPerPage} />

            </div>
        </>

    )
}

export default CartSection;