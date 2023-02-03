import { logOut } from "../../utilities/users-service" 

export default function Logout ({ user, setUser }) {
  function handleLogOut () {
    logOut()
  }
  return (
    <>
      <a href='/' onClick={handleLogOut}>Log Out</a>
    </>
  )
}