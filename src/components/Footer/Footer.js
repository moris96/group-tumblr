import styles from "../Footer/Footer.module.scss"
import {Link} from 'react-router-dom'; 

export default function Footer () {
  return (
    <section className={styles.footerContainer}>
      <Link>About</Link>
      <Link>Apps</Link>
      <Link>Legal</Link>
      <Link>Privacy</Link>
    </section>
  )
} 