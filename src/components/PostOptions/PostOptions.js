import styles from "../PostOptions/PostOptions.module.scss"
import { useState, useRef } from "react"
import React from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import Text from "./Text/Text";



export default function PostOptions (props) {

  return (
    <section className={styles.postOptionsContainer}>
      <Popup trigger={<p>TEXT</p>} modal>
        {close => (
          <div>
            <Text close1={props.close1}
            close={close}
            user={props.user}
            newPostElement={props.newPostElement}
            setNewPostElement={props.setNewPostElement} />
            <a className="close" onClick={close}>
              &times;
            </a>
          </div>  
        )}
      </Popup>
      <div className={styles.circle}>
        <div className={styles.wordContainer}>
          <p className={styles.photos}>PHOTOS</p>&nbsp;
        </div>
      </div>
      <div className={styles.circle2}>
        <div className={styles.wordContainer}>
          <p className={styles.photos}>QUOTES</p>&nbsp;
        </div>
      </div>
      <div className={styles.circle3}>
        <div className={styles.wordContainer}>
          <p className={styles.photos}>LINKS</p>&nbsp;
        </div>
      </div>
      <div className={styles.circle4}>
        <div className={styles.wordContainer}>
          <p className={styles.photos}>CHAT</p>&nbsp;
        </div>
      </div>
      <div className={styles.circle5}>
        <div className={styles.wordContainer}>
          <p className={styles.photos}>AUDIO</p>&nbsp;
        </div>
      </div>
      <div className={styles.circle6}>
        <div className={styles.wordContainer}>
          <p className={styles.photos}>VIDEO</p>&nbsp;
        </div>
      </div>
    </section>  
  )
}