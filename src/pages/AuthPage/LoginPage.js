import AuthGreet from '../../components/AuthGreet/AuthGreet'
import LoginForm from '../../components/LogInForm/LogInForm'
// import { Routes, Route } from "react-router-dom"

export default function LoginPage(props){
    return(
        <main>
            <AuthGreet />
            <LoginForm setUser={props.setUser}></LoginForm>
            Sign in with Apple<br/>
            Sign in with Google
        </main>
    )
}