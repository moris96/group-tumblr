import { useState } from "react"
import styles from "../AuthGreet/AuthGreet.module.scss"
import Popup from "reactjs-popup"

export default function AuthGreet () {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  return (
    <section 
    className={styles.authGreetContainer}
    >
      <h1>tumblE</h1>
      <p>You were probably looking for Tumblr and you tumblE onto here</p>
      <h4>Sign up or Log In</h4>
      <p>By continuing, you read and  agree to our <span>Terms of Service</span> and our <span>Privary Policy</span>
      &nbsp;
      </p>
    </section>
  )
}