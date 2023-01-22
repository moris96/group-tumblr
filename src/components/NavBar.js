import Logo from "./Logo/Logo"
import styles from "../components/NavBar/NavBar.module.scss"

export default function NavBar(props){
  return(
    <div className={styles.navBarContainer}>
      <Logo />
      <p>search bar (ice box)</p>&nbsp;
      <p>home icon</p>&nbsp;
      <p>explore</p>&nbsp;
      <p>messages</p>&nbsp;
      <p>chat</p>&nbsp;
      <p>account dropdown</p>&nbsp;
      <p>post tabs</p>&nbsp;
    </div>
    )
}