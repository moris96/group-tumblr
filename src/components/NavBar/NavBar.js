import React from "react"
import Popup from "reactjs-popup"
import { Link } from 'react-router-dom'
import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"
import 'reactjs-popup/dist/index.css';
import Account from "../Account/Account";
import HomePage from "../../pages/HomePage/HomePage"
import PostOptions from "../PostOptions/PostOptions"
// import styles from "../components/NavBar/NavBar.module.scss"


export default function NavBar(props){

  const handleClick = (i) => {
    if (i === 0) {
      <HomePage />
    }
  }

  return(
    <div className="navBarContainer">

      <Logo />
      <SearchBar />
      <Link to='/'><button className="home-button"><img className="home-icon" src={process.env.PUBLIC_URL+"/iconsImg/8.png"} alt="icon" /></button></Link>&nbsp;
      <button className="explore-button"><img className="explore-icon" src={process.env.PUBLIC_URL+"/iconsImg/7.png"} alt="explore" /></button>&nbsp;
      <button className="mail-button"><img className="mail-icon" src={process.env.PUBLIC_URL+"/iconsImg/5.png"} alt="explore" /></button>&nbsp;
      <button className="chat-button"><img className="chat-icon" src={process.env.PUBLIC_URL+"/iconsImg/4.png"} alt="chat" /></button>&nbsp;
      <Popup trigger={<button className="account-button"><img className="account-icon" src={process.env.PUBLIC_URL+"/iconsImg/2.png"} alt="account" /></button>} >{<Account />}</Popup>
      <Popup trigger={<button className="post-button"><img className="post-icon" src={process.env.PUBLIC_URL+"/iconsImg/1.png"} alt="post" /></button>} modal nested>
        {close1=>(
        <PostOptions newPostElement={props.newPostElement} setNewPostElement={props.setNewPostElement} close1={close1} user={props.user}/>
        )}
      </Popup>
    </div>
    )
}
