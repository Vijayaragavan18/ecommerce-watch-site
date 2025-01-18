import { useContext, useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { cartContext } from "../../connect";
import toast, { Toaster } from 'react-hot-toast';
import LogBg from "../../images/logBg.png";
import RegBg from "../../images/bgImage.jpg";
import '../css/style.css';

import axios from 'axios';
const RenderMessage = ({ message }) => {
    if (!message) return null;
    return <div className="text-danger text-start w-100">{message}</div>
}



const LogPage = ({ onClose }) => {
    const { check, setCheck, setvisible, dataValue, input, setinput, } = useContext(cartContext);
    const [showReg, setShowReg] = useState("Login")
    const [error, setError] = useState(false);


    const successNotify = () => toast.success('Login Successfully!');
    const errorNotify = () => toast.error('Something Went Wrong!');
    const modalRef = useRef();
    const closePage = (e) => {
        if (modalRef.current === e.target) {
            onClose()
        }
    }





    const isValid = (e) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e)
    }
    const isValidName = (e) => {
        return /^[A-Za-z\s'-]+$/.test(e)


    }
    const isValidPassword = (e) => {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(e)


    }
    





    const handleSubmit = async (e) => {
        e.preventDefault();




        // 'https://jsonplaceholder.typicode.com/todos/1'


        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', input);
        if (!input.UserEmail || input.UserEmail === "") {
            setError(true);
            return
        }
        if (input.UserEmail != "" && !isValid(input.UserEmail)) {
            setError(true)
            return
        }
        if (!input.UserPassword || input.UserPassword === "") {
            setError(true);
            return
        }
        if (!input.rePassword || input.rePassword === "") {
            setError(true);
            return
        }


        if (input.UserPassword !== input.rePassword) {
            setError(true);
            return;
        }



        successNotify()
        setCheck(true)


        //     successNotify() ? 
        //    ;
        //     : 

        onClose()


        console.log("value is", response.status)




        // } catch (error) {

        //     errorNotify()
        // }




    }







    return (

        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />



            <div ref={modalRef} onClick={closePage} className="loginBackground bac bg-black bg-opacity-25 " >


                <div className="logBg">
                    <img src={RegBg} alt="loginImage" />
                    <div onClick={onClose} className="crossIcon">
                        <RxCross2 className="modalCrossIcon" />
                    </div>
                </div>





                {
                    showReg == "Login" ?








                        <div className="loginDetails">
                            <div className="logCredential">
                                <h1>{showReg}</h1>
                                <form action="#">
                                    <input type="email" placeholder='Email' />
                                    <input type='password' placeholder='Password' />

                                    <div className="logLinks">

                                        <a href="./">Forgot Your Password ? </a>
                                        <button onClick={() => setShowReg("Sign Up")}>New User </button>
                                    </div>
                                    <div className="loginBtns">

                                        <button className=" btn btn-secondary" type="submit"> Log in</button>

                                    </div>

                                </form>

                            </div>
                        </div>
                        :
                        <div className="loginDetails">
                            <div className="logCredential">
                                <h1>{showReg}</h1>
                                <form onSubmit={handleSubmit}>
                                    <input type="Text" name="UserName" placeholder='Name' value={input.UserName} onChange={(e) => setinput({ ...input, UserName: e.target.value })} maxLength={30} />
                                    {error && input.UserName === "" && <RenderMessage message="Name is a required field" />}
                                    {error && input.UserName != "" && !isValidName(input.UserName) && <RenderMessage message="invalid Name  field" />}

                                    <input placeholder='Email' value={input.UserEmail} onChange={(e) => setinput({ ...input, UserEmail: e.target.value })} maxLength={30} />
                                    {error && input.UserEmail === "" && <RenderMessage message="Email is a required field" />}
                                    {error && input.UserEmail != "" && !isValid(input.UserEmail) && <RenderMessage message="invalid email  field" />}

                                    <input type="Password" name="UserPassword" placeholder='Password' value={input.UserPassword} onChange={(e) => setinput({ ...input, UserPassword: e.target.value })} maxLength={10} />
                                    {error && input.UserPassword === "" && <RenderMessage message="Password is a required field" />}
                                    {error && input.UserPassword != "" && !isValidPassword(input.UserPassword) && <RenderMessage message="invalid Password field" />}

                                    <input type='password' name="rePassword" placeholder='Re enter Password' maxLength={10} value={input.rePassword}
                                        onChange={(e) => setinput({ ...input, rePassword: e.target.value })} />
                                    {error && input.rePassword === "" && <RenderMessage message="password invalid " />}
                                    {error && input.rePassword !== "" && input.UserPassword !== input.rePassword &&
                                        <RenderMessage message="Passwords do not match" />
                                    }


                                    {/* <div className="logLinks">
                                        <button onClick={() => setShowReg("Login")}>already a User?</button>
                                    </div> */}
                                    <div className="loginBtns">

                                        <button className=" btn btn-secondary" type="submit"> Sign in</button>

                                    </div>

                                </form>

                            </div>
                        </div>

                }



            </div>









        </>





    )
}

export default LogPage