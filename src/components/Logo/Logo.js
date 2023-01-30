import AuthPage from "../../pages/AuthPage/AuthPage"
import { Routes, Route } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import HomePage from "../../pages/HomePage/HomePage"

export default function Logo () {

  const handleClick = ({user}) => {
    // {
    //   user ?
    //   <>
    //     <NavBar user={user} newPostElement={newPostElement} setNewPostElement={setNewPostElement} />
    //     <Routes>
    //       <Route path="/" element={<HomePage newPostElement={newPostElement} setNewPostElement={setNewPostElement} user={user}/>} />
    //     </Routes>
    //   </>
    //   :
    //   <AuthPage setUser={setUser}/>
    // }
  }

  return (
    <>
      <button className="logo"><img src={process.env.PUBLIC_URL+"/iconsImg/logo.png"} alt="logo" className="logo-image" onClick={handleClick} /></button>
    </>
  )
}