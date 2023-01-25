import "./AuthPage.css"
import SignUpPage from "./SignUpPage"
import LoginPage from "./LoginPage"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

export default function AuthPage(props){
    return(
        <main id="Auth">
            <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            </nav>
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/login" element={<LoginPage setUser={props.setUser} />} />
                <Route path="/signup" element={<SignUpPage setUser={props.setUser} />} />
            </Routes>
            {/* <LoginPage setUser={props.setUser}/> */}
        </main>
    )
}
