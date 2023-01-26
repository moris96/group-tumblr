import AuthGreet from "../../components/AuthGreet/AuthGreet"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
// import { Routes, Route } from "react-router-dom"

export default function SignUpPage(props){
    return(
        <main className="signUpContainer">
            <AuthGreet />
            <SignUpForm setUser={props.setUser}></SignUpForm>
        </main>
    )
}