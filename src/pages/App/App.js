import { useState, useEffect } from "react"
import AuthPage from "../AuthPage/AuthPage"
import { Routes, Route } from "react-router-dom"
// import NavBar from "../../components/NavBar"
import NavBar from "../../components/NavBar/NavBar"
import HomePage from "../HomePage/HomePage"
import { getUser } from "../../utilities/users-service"

function App() {
  
  const [state, setState] = useState(null)
  const [user, setUser] = useState(getUser())
  const [newPostElement, setNewPostElement] = useState(true)
  // const [user, setUser] = useState(getUser())

  const fetchState = async () => {
    try{
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch(error){
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])
  
  
  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} newPostElement={newPostElement} setNewPostElement={setNewPostElement} />
          <Routes>
            <Route path="/" element={<HomePage newPostElement={newPostElement} setNewPostElement={setNewPostElement} user={user}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
