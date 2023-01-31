import { Routes, Route } from "react-router-dom"
import UserPage from "../../pages/UserPage/UserPage"
import AuthPage from "../../pages/AuthPage/AuthPage"
import styles from "../Logo/Logo.module.scss"


export default function Logo () {

  const handleClick = ({user}) => {
    {
      user ?
      <>
        <Routes>
          <Route path="/" element={<UserPage user={user}/>} />
        </Routes>
      </>
      :
      <AuthPage />
    }
  }

  return (
    <>
      <button className={styles.logo}><img src={process.env.PUBLIC_URL+"/iconsImg/logo.png"} alt="logo" className="logo-image" onClick={handleClick} /></button>
    </>
  )
}