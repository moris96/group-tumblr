import "./AuthPage.css"
import SignUpPage from "./SignupPage"
import LoginPage from "./LoginPage"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Routes, Route } from "react-router-dom"
import Popup from "reactjs-popup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginForm from "../../components/LogInForm/LogInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage(props){
    return(
        <main id="Auth">
            <nav>
            <Link to="/">Home</Link>
            <Popup trigger={<button className="logIn">Log In</button>}
            modal
            nested
            >
            {<LoginForm />}
            </Popup>
            <Popup trigger={<button className="SignUp">Sign Up</button>}
            modal
            nested
            >{<SignUpForm />}</Popup>
            </nav>
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/login" element={<LoginPage setUser={props.setUser} />} />
                <Route path="/signup" element={<SignUpPage setUser={props.setUser} />} />
            </Routes>
            {/* <LoginPage setUser={props.setUser}/> */}
            <section>
                <body>
                    <h1>HELLO</h1>
                </body>
            </section>
        </main>
    )
}