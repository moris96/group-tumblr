import SignUpForm from "../../components/SignUpForm"
import LoginPage from "./LoginPage"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

export default function AuthPage(props){
    return(
        <main>
            <h1>Auth Page</h1>
            <Routes>
                <Route></Route>
            </Routes>
            <LoginPage setUser={props.setUser}/>
            <SignUpForm setUser={props.setUser}/>
        </main>
    )
}