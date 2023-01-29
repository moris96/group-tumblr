import { useState, useEffect } from "react"
import AuthPage from "../AuthPage/AuthPage"
import { Routes, Route } from "react-router-dom"
// import NavBar from "../../components/NavBar"
import NavBar from "../../components/NavBar/NavBar"
import HomePage from "../HomePage/HomePage"
import { getUser } from "../../utilities/users-service"
import Footer from "../../components/Footer/Footer"


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
  }, [user])
  
  function testUser() {
console.log(user, "test")
return user
  }
  return (
    <main className="App">
     
          <NavBar user={testUser()} newPostElement={newPostElement} setNewPostElement={setNewPostElement} />
          <Routes>
            <Route path="/" element={<HomePage newPostElement={newPostElement} setNewPostElement={setNewPostElement} user={user}/>} />
          </Routes>
          <Footer></Footer>
    </main>
  );
}

export default App;