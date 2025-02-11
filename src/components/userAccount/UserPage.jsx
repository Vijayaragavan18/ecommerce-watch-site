import React, { useContext } from 'react'
import { cartContext } from '../../connect';
import './user.css';
function UserPage() {

    const { input, setinput, adressPage } = useContext(cartContext);
    console.log(input.UserName)

    return (
        <>
            <div className="userData">

                <h1 className='display-5'>Hai {input.UserName}</h1>
                {
                    !adressPage &&
                    <h1 className='text-danger'>No products here</h1>
                }


                {
                    adressPage &&

                    <div className="afterNote">
                        <h1 className='text-success success_note' > {input.UserName}, Your Product Successfully Ordered</h1>

                        <p className="text-danger">Now You Can REFRESH Your Screen</p>

                    </div>



                }

            </div>


        </>
    )
}

export default UserPage