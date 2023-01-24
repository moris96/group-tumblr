import { logOut } from "../../utilities/users-service" 

export default function Logout ({ user, setUser }) {
  function handleLogOut () {
    logOut()
    setUser(null)
  }
  return (
    <>
      <a href='/' onClick={handleLogOut}>Log Out</a>
    </>
  )
}