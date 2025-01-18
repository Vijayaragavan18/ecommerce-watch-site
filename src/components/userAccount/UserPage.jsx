import React, { useContext } from 'react'
import { cartContext } from '../../connect';

function UserPage() {

    const { input, setinput } = useContext(cartContext);
    console.log(input.UserName)

    return (
        <>

            <h1>Name :{input.UserName}</h1>




        </>
    )
}

export default UserPage