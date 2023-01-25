import { useState, useEffect } from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm"
// import { Routes, Route } from "react-router-dom"

export default function SignUpPage(props){
    return(
        <main>
            <h1>Sign Up</h1>
            <SignUpForm setUser={props.setUser}></SignUpForm>
        </main>
    )
}