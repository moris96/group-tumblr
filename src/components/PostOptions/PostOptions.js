
import styles from "../PostOptions/PostOptions.module.scss"
import { useState, useRef } from "react"
import React from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import Text from "./Text/Text";
import Photo from "./Photo/Photo";



export default function PostOptions (props) {

  return (
    <section className={styles.postOptionsContainer}>
      <Popup trigger={<Circle num="0" text="Text"></Circle>} modal>
        {close => (
          <div>
            <Text close1={props.close1}
            close={close}
            user={props.user}
            blog={props.blog}
            newPostElement={props.newPostElement}
            setNewPostElement={props.setNewPostElement} />
            <a className="close" onClick={close}>
              &times;
            </a>
          </div>  
        )}
      </Popup>
      <Popup trigger={<Circle num="1" text="Photos"></Circle>} modal>
        {close => (<div>
          <Photo onClick close1={props.close1}
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

      <Circle num="2" text="QUOTES"></Circle>
      <Circle num="3" text="LINKS"></Circle>
      <Circle num="4" text="CHAT"></Circle>
      <Circle num="5" text="AUDIO"></Circle>
      <Circle num="6" text="VIDEO"></Circle>
      
      
      
    </section>  
  )
}
var srcs = ["text", "photos", "quote", "link", "chat", "audio", "video"]
function Circle(props){
  return (<>
  <div className={`${styles.circleContainer}`}>
    <div className={`${styles.circle} ${styles[`circle${props.num}`]}`}>
      <img src={process.env.PUBLIC_URL+`/iconsImg/${srcs[props.num]}.png`}></img>

      </div>
      <div className={styles.wordContainer}>
          <p className={styles.photos}>{props.text}</p>&nbsp;
        </div>
    
  </div>
  </>)
}