import { useState, useEffect } from 'react';
import LoginForm from "../../components/LoginForm"
//import { Routes, Route } from "react-router-dom"

export default function AuthPage(props){
    return(
        <main>
            <h1>Sign in</h1>
            <LoginForm></LoginForm>
        </main>
    )
}