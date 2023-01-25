import { useState, useEffect } from 'react';
import LoginForm from '../../components/LogInForm';
// import { Routes, Route } from "react-router-dom"

export default function LoginPage(props){
    return(
        <main>
            <h1>Sign in</h1>
            <LoginForm setUser={props.setUser}></LoginForm>
            Sign in with Apple<br/>
            Sign in with Goolge
        </main>
    )
}