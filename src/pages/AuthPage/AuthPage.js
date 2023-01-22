//Auth Page

import SignUpForm from "../../components/SignUpForm"
import LoginForm from "../../components/LogInForm"

export default function AuthPage(props){
    return(
        <main>
            <h1>Auth Page</h1>
            <SignUpForm setUser={props.setUser}/>
            <LoginForm setUser={props.setUser} />
        </main>
    )
};