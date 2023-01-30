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
import "../NavBar/NavBar.css"
import HomeBtn from "../HomeBtn/HomeBtn"


export default function NavBar(props){

  const handleClick = (i) => {
    if (i === 0) {
      <HomePage />
    }
  }

  return(
    <div className="navBarContainer">
      <section className="nav-bar-left">
        <section className="logoNavBar">
          <Logo user={props}/>
        </section>
        <section className="searchNavBar">
          <SearchBar />
        </section>
      </section>
      <section className="nav-bar-right">
        <HomeBtn />
        <button className="explore-button  nav-button"><img className="explore-icon" src={process.env.PUBLIC_URL+"/iconsImg/7.png"} alt="explore" /></button>&nbsp;
        <button className="mail-button nav-button"><img className="mail-icon" src={process.env.PUBLIC_URL+"/iconsImg/5.png"} alt="explore" /></button>&nbsp;
        <button className="chat-button nav-button"><img className="chat-icon" src={process.env.PUBLIC_URL+"/iconsImg/4.png"} alt="chat" /></button>&nbsp;
        <Popup trigger={<button className="account-button nav-button"><img className="account-icon" src={process.env.PUBLIC_URL+"/iconsImg/2.png"} alt="account" /></button>} >{<Account user={props}/>}</Popup>
        <Popup trigger={<button className="post-button nav-button"><img className="post-icon" src={process.env.PUBLIC_URL+"/iconsImg/1.png"} alt="post" /></button>} modal nested>
          {close1=>(
          <PostOptions newPostElement={props.newPostElement} setNewPostElement={props.setNewPostElement} close1={close1} user={props.user}/>
          )}
        </Popup>
      </section>
    </div>
    )
}