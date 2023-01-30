import React from "react"
import { Link } from 'react-router-dom'
import styles from "../HomeBtn/HomeBtn.module.scss"

export default function HomeBtn () {

  return (
    <section className={styles.homeBtnContainer}>
      <Link to='/'>
        <button 
        className={styles.homeButton}>
          <img className={styles.homeIcon}
          src={process.env.PUBLIC_URL+"/iconsImg/8.png"} alt="icon" />
        </button>
      </Link>
    </section>
  )
}