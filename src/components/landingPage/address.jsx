import React, { useContext, useState } from "react";
import { cartContext } from "../../connect";
const Address = () => {
    const { check, setCheck, setvisible, dataValue, input, setinput, } = useContext(cartContext);
    return (
        <>
            <div className="loginDetails">
                <div className="logCredential">
                    <h1>{`hello${input.UserName}`}</h1>
                    <form>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <div className="loginBtns">

                            <button className=" btn btn-secondary" type="submit"> Sign in</button>

                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Address