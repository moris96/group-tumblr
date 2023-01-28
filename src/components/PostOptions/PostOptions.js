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
          <img className={styles.photoImg} src={process.env.PUBLIC_URL+"/iconsImg/photos.png"} alt="photos"/>
          {/* <p className={styles.photos}>PHOTOS</p>&nbsp; */}
        </div>
      </div>
      <div className={styles.circle2}>
        <div className={styles.wordContainer}>
        <img className={styles.quoteImg} src={process.env.PUBLIC_URL+"/iconsImg/quote.png"} alt="quote"/>
          {/* <p className={styles.photos}>QUOTES</p>&nbsp; */}
        </div>
      </div>
      <div className={styles.circle3}>
        <div className={styles.wordContainer}>
        <img className={styles.linkImg} src={process.env.PUBLIC_URL+"/iconsImg/link.png"} alt="link"/>
          {/* <p className={styles.photos}>LINKS</p>&nbsp; */}
        </div>
      </div>
      <div className={styles.circle4}>
        <div className={styles.wordContainer}>
        <img className={styles.chatImg} src={process.env.PUBLIC_URL+"/iconsImg/chat.png"} alt="chat"/>
          {/* <p className={styles.photos}>CHAT</p>&nbsp; */}
        </div>
      </div>
      <div className={styles.circle5}>
        <div className={styles.wordContainer}>
        <img className={styles.audioImg} src={process.env.PUBLIC_URL+"/iconsImg/audio.png"} alt="audio"/>
          {/* <p className={styles.photos}>AUDIO</p>&nbsp; */}
        </div>
      </div>
      <div className={styles.circle6}>
        <div className={styles.wordContainer}>
        <img className={styles.videoImg} src={process.env.PUBLIC_URL+"/iconsImg/video.png"} alt="video"/>
          {/* <p className={styles.photos}>VIDEO</p>&nbsp; */}
        </div>
      </div>
    </section>  
  )
}