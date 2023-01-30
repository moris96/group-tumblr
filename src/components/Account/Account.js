
import Logout from "../LogOut/LogOut"
import Settings from "../../pages/Settings/Settings"

export default function Account ({user}) {
  return (
    <main>
      <h1>Account</h1>
      <Logout />
      <Settings user={user}/>
    </main>
  )
}