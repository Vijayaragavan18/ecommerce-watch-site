
import React from "react";
import ContactList from './components/contactList';
import ContactCard from './components/contactCard';
import AddContact from './components/addContacts';
import Header from './components/header';

function propsCheck() {

    const contacts = [
        {
            id: '1',
            'name': 'vijay',
            'email': 'vijay@gmail.com'
        },
        {
            id: '2',
            'name': 'arun',
            'email': 'arun@gmail.com'
        }


    ]


    return (

        <>
            <Header />
            <AddContact />
            <ContactList contact={contacts} />
        </>


    )
}
export default propsCheck;