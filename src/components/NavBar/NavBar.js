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
      <Link to='/'><button className="home-button"><img className="home-icon" src="https://static.thenounproject.com/png/77002-200.png" alt="icon" /></button></Link>&nbsp;
      <button className="explore-button"><img className="explore-icon" src="https://t3.ftcdn.net/jpg/03/16/35/26/360_F_316352607_hAJzMbFFXKW3EsB9vL51KuKh50MwekEC.jpg" alt="explore" /></button>&nbsp;
      <button className="mail-button"><img className="mail-icon" src="https://img.freepik.com/free-icon/envelope_318-408141.jpg?w=2000" alt="explore" /></button>&nbsp;
      <button className="chat-button"><img className="chat-icon" src="https://cdn-icons-png.flaticon.com/512/40/40284.png" alt="chat" /></button>&nbsp;
      <Popup trigger={<button className="account-button"><img className="account-icon" src="https://static.thenounproject.com/png/4038155-200.png" alt="account" /></button>}>{<Account />}</Popup>
      <Popup trigger={<button className="post-button"><img className="post-icon" src="https://www.pngkit.com/png/detail/436-4368614_png-file-new-post-icon-png.png" alt="post" /></button>} modal nested><PostOptions user={props.user}/></Popup>
    </div>
    )
}