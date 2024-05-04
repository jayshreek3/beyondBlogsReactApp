import React, {useState} from "react";
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom";
import "../style.css"

function Login({setIsAuth}){

    let navigate = useNavigate();
    const [isContainerChanged, setIsContainerChanged] = useState(false);
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) =>{
            // var to chk if we're logged on or nor by st mgmt, api or
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/")
        })
    }

   // return (
        // <div className="loginPage">
        //     <p>Sing in to continue</p>
        //     <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
        // </div>

    const handleSignUpButtonClick = () => {
        setIsContainerChanged(!isContainerChanged);
    };

    return (
        <div className={`container ${isContainerChanged ? "change" : ""}`}>
            <div className="form-wrapper">
                <div className="banner">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your details and start blogging!</p>
                </div>
                <div className="green-bg">
                    <button type="button" onClick={handleSignUpButtonClick}>
                        Login
                    </button>
                </div>
                <form className="signup-form">
                    <h1>Create Account</h1>
                    <div className="social-media">
                        <i className="fa-brands fa-meta"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="input-group">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="input-group">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email Id"/>
                    </div>
                    <div className="input-group">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <p>or sign up with Google!</p>
                    <button type="button" onClick={signInWithGoogle}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}


export default Login;