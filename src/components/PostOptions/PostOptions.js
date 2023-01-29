import styles from "../PostOptions/PostOptions.module.scss"
import { useState, useRef } from "react"
import React from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import Text from "./Text/Text";



export default function PostOptions (props) {

  return (
    <section className={styles.postOptionsContainer}>
      <Popup trigger={<Circle num="0" text="Text"></Circle>} modal>
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
      <Circle num="1" text="PHOTOS"></Circle>
      <Circle num="2" text="QUOTES"></Circle>
      <Circle num="3" text="LINKS"></Circle>
      <Circle num="4" text="CHAT"></Circle>
      <Circle num="5" text="AUDIO"></Circle>
      <Circle num="6" text="VIDEO"></Circle>
    </section>  
  )
}

function Circle(props){
  return (<>
  <div>
    <div className={`${styles.circle} ${styles[`circle${props.num}`]}`}>
      <img src={process.env.PUBLIC_URL+"/logo192.png"}></img>

      </div>
      <div className={styles.wordContainer}>
          <p className={styles.photos}>{props.text}</p>&nbsp;
        </div>
    
  </div>
  </>)
}