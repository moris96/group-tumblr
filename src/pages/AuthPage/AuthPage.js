//Auth Page

import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LogInForm/LogInForm"
import { useEffect, useState } from "react"

export default function AuthPage(props) {
    const [show, setShow] = useState(null)

    const components = [
        {
            component: <LoginForm setUser={props.setUser} />
        },
        {
            component: <SignUpForm setUser={props.setUser}/>
        }
    ]

    const handleClick = (i) => {
        if (show === 0){
            return setShow(null)
        }
        setShow(1)
        if (show === 1){
            return setShow(null)
        }
        setShow(0)
    }

    useEffect (() => {
        setShow(0)
    }, [])

    return(
        <main>
            <button onClick={handleClick}>
                Click for Sign Up or Login
            </button>
            <section className={show === 0 ? 'show' : 'hide'}>{components[0].component}</section>
            <section className={show === 1 ? 'show' : 'hide'}>{components[1].component}</section>
            {/* <SignUpForm setUser={props.setUser}/>
            <LoginForm setUser={props.setUser} /> */}
        </main>
    )
};
