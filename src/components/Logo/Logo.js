import styles from "../Logo/Logo.module.scss"


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
      <button className={styles.logo}><img src={process.env.PUBLIC_URL+"/iconsImg/logo.png"} alt="logo" className="logo-image" onClick={handleClick} /></button>
    </>
  )
}