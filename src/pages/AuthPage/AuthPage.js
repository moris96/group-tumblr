import "./AuthPage.css"
import SignUpPage from "./SignupPage"
import LoginPage from "./LoginPage"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Routes, Route } from "react-router-dom"
import Popup from "reactjs-popup";

export default function AuthPage(props){
    return(
        <main id="Auth">
            <nav>
            <Link to="/">Home</Link>
            <Popup trigger={<button className="logIn">Log In</button>}
            modal
            nested
            >
            {<LoginPage setUser={props.setUser} />}
            </Popup>
            <Popup trigger={<button className="SignUp">Sign Up</button>}
            modal
            nested
            >{<SignUpPage setUser={props.setUser} />}</Popup>
            </nav>
            <section>
                <body>
                    <h1>HELLO</h1>
                </body>
            </section>
        </main>
    )
}