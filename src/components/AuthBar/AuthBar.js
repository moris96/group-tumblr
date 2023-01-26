import Popup from "reactjs-popup";
import SignUpPage from "../../pages/AuthPage/SignupPage"
import LoginPage from "../../pages/AuthPage/LoginPage"
import styles from "../AuthBar/AuthBar.module.scss"
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from 'react-router-dom';
import Logo from "../Logo/Logo";

export default function AuthBar (props) {
  return (
  <div className={styles.authBarContainer}>
    <section className={styles.authLeftSide}> 
      <Logo />
      <SearchBar />
    </section>
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
      >{<SignUpPage setUser={props.setUser} />}
      </Popup>
    </section>
  </div>
  )
}