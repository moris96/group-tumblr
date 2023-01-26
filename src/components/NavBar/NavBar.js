import Logo from "../Logo/Logo"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom';
// https://remixicon.com
// import styles from "../components/NavBar/NavBar.module.scss"


export default function NavBar(props){
  return(
    <div className="navBarContainer">

      <Logo />
      <SearchBar />
      <button className="home-button"><img className="home-icon" src="https://static.thenounproject.com/png/77002-200.png" alt="icon" /></button>&nbsp;
      <button className="explore-button"><img className="explore-icon" src="https://t3.ftcdn.net/jpg/03/16/35/26/360_F_316352607_hAJzMbFFXKW3EsB9vL51KuKh50MwekEC.jpg" alt="explore" /></button>&nbsp;
      {props.user ? <>
        <button className="mail-button"><img className="mail-icon" src="https://img.freepik.com/free-icon/envelope_318-408141.jpg?w=2000" alt="explore" /></button>&nbsp;
        <button className="chat-button"><img className="chat-icon" src="https://cdn-icons-png.flaticon.com/512/40/40284.png" alt="chat" /></button>&nbsp;
        <button className="account-button"><img className="account-icon" src="https://static.thenounproject.com/png/4038155-200.png" alt="account" /></button>&nbsp;
        <button className="post-button"><img className="post-icon" src="https://www.pngkit.com/png/detail/436-4368614_png-file-new-post-icon-png.png" alt="post" /></button>&nbsp;
      </>:<>
      {/* <i class="ri-login-box-line"></i> */}
        <Link to="/login"><button alt="Login"><i class="ri-login-box-line nav-icon" ></i></button></Link>
        <Link to="/signup"><button alt="Sign Up"><i class="ri-account-box-line"></i></button></Link>
      </>}
    </div>
    )
}