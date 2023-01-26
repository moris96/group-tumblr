import "./AuthPage.css"
import SignUpPage from "./SignupPage"
import LoginPage from "./LoginPage"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Popup from "reactjs-popup";
import styles from "../AuthPage/AuthPage.module.scss"
import AuthBody from "../../components/AuthBody/AuthBody";
import AuthBar from "../../components/AuthBar/AuthBar";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function AuthPage(props){
    return(
        <main id="Auth">
            <Link to="/">Home</Link>
            <SearchBar />
            <section className={styles.authBtns}>
                <Popup trigger={<button className={styles.logIn}>Log In</button>}
                modal
                nested
                >
                {<LoginPage setUser={props.setUser} />}
                </Popup>
                <Popup trigger={<button className={styles.signUp}>Sign Up</button>}
                modal
                nested
                >{<SignUpPage setUser={props.setUser} />}</Popup>
            </section>
            {/* <AuthBar setUser={setUser}/> */}
            <AuthBody />
        </main>
    )
}