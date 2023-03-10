//Post Options.js

import { useState, useRef } from "react"
import React from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import Text from "./Text/Text";
import Photo from "./Photo/Photo";
import Video from "./Video/Video";
import styles from "../PostOptions/PostOptions.module.scss"



export default function PostOptions (props) {

  return (
    <section className={styles.postOptionsContainer}>
      <Popup trigger={<div><Circle num="0" text="Text" /></div>} modal>
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
      <Popup trigger={<div><Circle num="1" text="Photos"></Circle></div>} modal>
        {close => (<div>
          <Photo onClick close1={props.close1}
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

      <Circle num="2" text="QUOTES"></Circle>
      <Circle num="3" text="LINKS"></Circle>
      <Circle num="4" text="CHAT"></Circle>
      <Circle num="5" text="AUDIO"></Circle>
      
      <Popup trigger={<div><Circle num="6" text="VIDEO"></Circle></div>} modal>
        {close => (<div>
          <Video onClick close1={props.close1}
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

















// import styles from "../PostOptions/PostOptions.module.scss"
// import { useState, useRef } from "react"
// import React from "react"
// import Popup from "reactjs-popup"
// import 'reactjs-popup/dist/index.css';
// import Text from "./Text/Text";
// import Photo from "./Photo/Photo";



// export default function PostOptions (props) {

//   return (
//     <section className={styles.postOptionsContainer}>
//       <Popup trigger={<p>TEXT</p>} modal>
//         {close => (
//           <div>
//             <Text close1={props.close1}
//             close={close}
//             user={props.user}
//             blog={props.blog}
//             newPostElement={props.newPostElement}
//             setNewPostElement={props.setNewPostElement} />
//             <a className="close" onClick={close}>
//               &times;
//             </a>
//           </div>  
//         )}
//       </Popup>
//       <Popup trigger={
//         <div className={styles.circle}>
//         <div className={styles.wordContainer}>
//           <img className={styles.photoImg} src={process.env.PUBLIC_URL+"/iconsImg/photos.png"} alt="photos"/>
//           {/* <p className={styles.photos}>PHOTOS</p>&nbsp; */}
//         </div>
//       </div>
//       } modal>
//         {close => (<div>
//           <Photo onClick close1={props.close1}
//           close={close}
//           user={props.user}
//           newPostElement={props.newPostElement}
//           setNewPostElement={props.setNewPostElement} />
//           <a className="close" onClick={close}>
//             &times;
//           </a> 
//           </div>
//         )}
//       </Popup>
      
//       <div className={styles.circle2}>
//         <div className={styles.wordContainer}>
//         <img className={styles.quoteImg} src={process.env.PUBLIC_URL+"/iconsImg/quote.png"} alt="quote"/>
//           {/* <p className={styles.photos}>QUOTES</p>&nbsp; */}
//         </div>
//       </div>
//       <div className={styles.circle3}>
//         <div className={styles.wordContainer}>
//         <img className={styles.linkImg} src={process.env.PUBLIC_URL+"/iconsImg/link.png"} alt="link"/>
//           {/* <p className={styles.photos}>LINKS</p>&nbsp; */}
//         </div>
//       </div>
//       <div className={styles.circle4}>
//         <div className={styles.wordContainer}>
//         <img className={styles.chatImg} src={process.env.PUBLIC_URL+"/iconsImg/chat.png"} alt="chat"/>
//           {/* <p className={styles.photos}>CHAT</p>&nbsp; */}
//         </div>
//       </div>
//       <div className={styles.circle5}>
//         <div className={styles.wordContainer}>
//         <img className={styles.audioImg} src={process.env.PUBLIC_URL+"/iconsImg/audio.png"} alt="audio"/>
//           {/* <p className={styles.photos}>AUDIO</p>&nbsp; */}
//         </div>
//       </div>
//       <div className={styles.circle6}>
//         <div className={styles.wordContainer}>
//         <img className={styles.videoImg} src={process.env.PUBLIC_URL+"/iconsImg/video.png"} alt="video"/>
//           {/* <p className={styles.photos}>VIDEO</p>&nbsp; */}
//         </div>
//       </div>
//     </section>  
//   )
// }