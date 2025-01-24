import React, { useContext } from 'react'
import { cartContext } from '../../connect';

function UserPage() {

    const { input, setinput, adressPage } = useContext(cartContext);
    console.log(input.UserName)

    return (
        <>

            <h1>Name :{input.UserName}</h1>
            {
                adressPage && <h1>{input.UserName}, Your Product Success Fully Orderd</h1>
            }



        </>
    )
}

export default UserPage