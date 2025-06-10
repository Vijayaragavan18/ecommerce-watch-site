import React, { useContext, useEffect, useState } from 'react'
import '../css/style.css';
import WatchOne from '../../images/watchshowOne.png';
import ShowOne from '../../images/showOne.png';
import ShowTwo from '../../images/showTwo.png';
import ShowThree from '../../images/showThree.png';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../connect';
function ViewCartPage() {

    const { productId } = useParams();
    const { products, brandImage, cart, setCart } = useContext(cartContext);

    const [item, setItem] = useState({});

    useEffect(() => {

        const foundItem = products.find(pro => pro.id == productId);

        setItem(foundItem)
    }, [productId, products, brandImage]);




    const addCart = () => {

        setCart([...cart, item])
    }
    

    const removeCart = (item) => {
        setCart(cart.filter((c) => c.id !== item.id));
    }




    return (
        <>

            <section>

                <div className="watchProduct">
                    <div className="productSection" key={item.id}>
                        <div className="productImageAndDes" >
                            <div className="productImg">
                                <img src={brandImage[item.image]} alt="watchOne" />
                            </div>
                            <div className="products">
                                <div className="productDesLeft">
                                    <p>Water Resistant</p>
                                    <p>Glass Material</p>
                                    <p>Movement</p>
                                    <p>Occasion</p>
                                    <p>Strap Color</p>
                                    <p>Warranty Period</p>
                                </div>
                                <div className="productDesLeft">
                                    <p>{item.water_resistance}</p>
                                    <p>{item.material}</p>
                                    <p>{item.movement}</p>
                                    <p>Casual</p>
                                    <p>Silver</p>
                                    <p>{item.price_valid_until}</p>

                                </div>
                            </div>
                        </div>
                        <div className="productDetails">
                            <div className="productDetailsUp">
                                <div className="productHead">
                                    <h1>{item.name}</h1>
                                </div>
                                <div className="productLine">
                                </div>
                                <div className="productDes">
                                    <p>{item.description}</p>
                                    <h2>NJ0158-89Z</h2>
                                </div>
                                <div className="priceDetails">
                                    <div className="price">
                                        {item.price_formatted}
                                        <p>(Inc. of all taxes)</p>
                                    </div>
                                </div>
                            </div>


                            {
                                cart.includes(item) ? <button onClick={() => removeCart(item.id)} className='addProduct' >Product Added </button> :
                                    <button onClick={addCart}> Add TO BAG </button>
                            }


                            <div className="productLine">
                            </div>

                            <div className="productAbout">
                                <h1>Key features</h1>
                                <p>{item.features}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="watchProductMb">
                    <div className="productSection" key={item.id}>
                        <div className="productImageAndDes" >
                            <div className="productImg">
                                <img src={brandImage[item.image]} alt="watchOne" />
                            </div>
                        </div>
                        <div className="productDetails">
                            <div className="productDetailsUp">
                                <div className="productHead">
                                    <h1>{item.name}</h1>
                                </div>
                                <div className="productLine">
                                </div>
                                <div className="productDes">
                                    <p>{item.description}</p>
                                    <h2>NJ0158-89Z</h2>
                                </div>
                                <div className="priceDetails">
                                    <div className="price">
                                        {item.price_formatted}
                                        <p>(Inc. of all taxes)</p>
                                    </div>
                                </div>
                            </div>


                            {
                                cart.includes(item) ? <button onClick={() => removeCart(item.id)} className='addProduct' >Product Added </button> :
                                    <button onClick={addCart}> Add TO BAG </button>
                            }


                            <div className="productLine">
                            </div>

                            <div className="productAbout">
                                <h1>Key features</h1>
                                <p>{item.features}</p>
                            </div>
                        </div>
                        <div className="products">
                            <div className="productDesLeft">
                                <p>Water Resistant</p>
                                <p>Glass Material</p>
                                <p>Movement</p>
                                <p>Occasion</p>
                                <p>Strap Color</p>
                                <p>Warranty Period</p>
                            </div>
                            <div className="productDesLeft">
                                <p>{item.water_resistance}</p>
                                <p>{item.material}</p>
                                <p>{item.movement}</p>
                                <p>Casual</p>
                                <p>Silver</p>
                                <p>{item.price_valid_until}</p>

                            </div>
                        </div>
                    </div>
                </div>






            </section>
        </>
    )
}

export default ViewCartPage