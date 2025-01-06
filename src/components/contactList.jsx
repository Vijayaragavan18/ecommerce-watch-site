import React from "react";
import ContactCart from './contactCard';
const contactList = (props) => {
    console.log(props);

    const renderList = props.contact.map((contact) => {
        return <ContactCart contact={contact} ></ContactCart>;
    })



    return (
        <>
            <h1>contact list</h1>
            {renderList}
        </>
    )


}
export default contactList;