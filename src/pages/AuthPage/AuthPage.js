import styles from "../AuthPage/AuthPage.module.scss"
import AuthBody from "../../components/AuthBody/AuthBody";
import AuthBar from "../../components/AuthBar/AuthBar";
import Footer from "../../components/Footer/Footer";


export default function AuthPage({setUser}){
    return(
        <main className={styles.auth}>
            <AuthBar setUser={setUser}/>
            <AuthBody />
            <Footer />
        </main>
    )
}

{/* <section className={styles.authBtns}>
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
</section> */}