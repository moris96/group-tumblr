import styles from "../PostOptions/PostOptions.module.scss"
import { useState, useRef } from "react"
import React from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import Text from "./Text/Text";



export default function PostOptions (props) {

  return (
    <section className={styles.postOptionsContainer}>
      <Popup trigger={<p>TEXT</p>} modal nested>
        {close => (
          <div>
            <Text user={props.user}/>
            <a className="close" onClick={close}>
              &times;
            </a>
          </div>
        )}
      </Popup>
      <p>PHOTOS</p>&nbsp;
      <p>QUOTES</p>&nbsp;
      <p>LINKS</p>&nbsp;
      <p>CHAT</p>&nbsp;
      <p>AUDIO</p>&nbsp;
      <p>VIDEO</p>&nbsp;
    </section>  
  )
}