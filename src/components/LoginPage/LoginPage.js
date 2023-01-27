import AuthGreet from '../AuthGreet/AuthGreet'
import LoginForm from '../LogInForm/LogInForm'
// import { Routes, Route } from "react-router-dom"
import styles from "../LoginPage/LoginPage.module.scss"

export default function LoginPage(props){
    return(
        <main className={styles.loginPageContainer}>
            <AuthGreet />
            <LoginForm setUser={props.setUser}></LoginForm>
            Sign in with Apple<br/>
            Sign in with Google
        </main>
    )
}