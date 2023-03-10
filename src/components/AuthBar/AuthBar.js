import Popup from "reactjs-popup";
import SignUpPage from "../SignupPage/SignupPage"
import LoginPage from "../LoginPage/LoginPage"
import styles from "../AuthBar/AuthBar.module.scss"
import SearchBar from "../../components/SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import "../AuthBar/AuthBar.css"

export default function AuthBar (props) {


  return (
  <div className={styles.authBarContainer}>
    <section className={styles.authLeftSide}> 
      <Logo />
      <section className={styles.searchBarAuth}>
        <SearchBar />
      </section>
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