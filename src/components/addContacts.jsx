import React from "react";

class addContacts extends React.Component {

    render() {


        return (

            <>


                <div className="addCon" style={{ textAlign: 'center' }}>

                    <h2>Add contact</h2>
                    <form >

                        <label htmlFor="inName">Name</label>
                        <input id="inName" type="text" name="name" placeholder="enter your name" />
                        <label htmlFor="mail">Email</label>
                        <input id="mail" type="name" name="email" placeholder="enter your email" />


                        <button type="submit">Submit</button>
                    </form>
                </div>



            </>


        )

    }


}
export default addContacts;