import { useState, useEffect } from "react"
import AuthPage from "../AuthPage/AuthPage"
import { Routes, Route, useParams } from "react-router-dom"
// import NavBar from "../../components/NavBar"
import NavBar from "../../components/NavBar/NavBar"
import HomePage from "../HomePage/HomePage"
import { getUser } from "../../utilities/users-service"
import UserPage from "../UserPage/UserPage"



function App() {
  
  const [state, setState] = useState(null)
  const [user, setUser] = useState(getUser())
  const [newPostElement, setNewPostElement] = useState(true)
  const [blog, setBlog] = useState(null)

  const fetchBlog = async() => {
    if(user){
      try {
        const response = await fetch(`/api/blogs/user/${user._id}`)
        const data = await response.json()
        setBlog(data[0])
      } catch (error) {
        console.error(error)
      }
    }
  }
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
  
  useEffect(() => {
    fetchBlog()
  }, [user])

  useEffect(() => {
    fetchBlog()
  }, [newPostElement])

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} blog={blog} newPostElement={newPostElement} setNewPostElement={setNewPostElement} />
          <Routes>
            <Route path="/" element={<HomePage newPostElement={newPostElement} setNewPostElement={setNewPostElement} user={user} blog={blog}/>} />
            <Route path=":id" element={<UserPage user={user} blog={blog} newPostElement={newPostElement} setNewPostElement={setNewPostElement}/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
