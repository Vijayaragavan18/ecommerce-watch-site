import { createContext, React, useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/landingPage/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./components/collection/collection";
import About from "../src/components/aboutPage/about";
import Footer from "./components/landingPage/footer";
import ViewPage from './components/landingPage/ViewCartPage.jsx';

import Cart from './components/cart/Cart';
import App from './App';
import Data from './assets/product.json';
import ViewCart from './components/landingPage/ViewCartPage.jsx';

import Brand1 from './assets/productImage/brand.png';
import Brand2 from './assets/productImage/brand1.png';
import Brand3 from './assets/productImage/brand2.png';
import Brand4 from './assets/productImage/brand.png';
import Brand5 from './assets/productImage/brand4.png';
import Brand6 from './assets/productImage/brand5.png';
import Brand7 from './assets/productImage/brand6.png';
import Brand8 from './assets/productImage/brand7.png';
import Brand9 from './assets/productImage/brand8.png';
import Brand10 from './assets/productImage/brand9.png';
import Brand11 from './assets/productImage/brand10.png';
import Brand12 from './assets/productImage/brand7.png';


export const cartContext = createContext();


function Connect() {

    const brandImage = {

        "brand1": Brand1,
        "brand2": Brand2,
        "brand3": Brand3,
        "brand4": Brand4,
        "brand5": Brand5,
        "brand6": Brand6,
        "brand7": Brand7,
        "brand8": Brand8,
        "brand9": Brand9,
        "brand10": Brand10,
        "brand11": Brand11,
        "brand12": Brand12,
    }




    const [cart, setCart] = useState([]);
    const [products] = useState(Data);
    const [visible, setvisible] = useState(false);
    const [showReg, setShowReg] = useState(false);

    const dataValue = {
        UserEmail: "",
        UserPassword: "",
        rePassword: "",
        UserName: "",
    }

    const [input, setinput] = useState(dataValue);


    // setTimeout(() => (
    //     setvisible(true)
    // ), 7000)
    return (

        <cartContext.Provider value={{ cart, setCart, products, brandImage, visible, dataValue, setvisible, input, setinput, showReg, setShowReg }}>



            <BrowserRouter basename='/ecommerce-watch-site'>
                <Nav />
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/Collection" element={<Collection />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/viewPage" element={<ViewPage />}></Route>
                    <Route path="/Cart" element={<Cart products={products} />}></Route >
                    <Route path='/viewCart/:productId' element={<ViewCart />}></Route>

                </Routes>


                <Footer />

            </BrowserRouter>

        </cartContext.Provider>

    )
}

export default Connect