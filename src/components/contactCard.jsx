import React from "react";



const contactCard = (props) => {
    const con = props.contact;
    return (

        <>
            <h2>{con.name}</h2>
            <h2>{con.email}</h2>
            <h2>remove</h2>

        </>


    )

}
export default contactCard;