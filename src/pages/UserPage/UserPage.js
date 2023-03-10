import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Post from "../../components/Post/Post"
import styles from './UserPage.module.scss'

export default function UserPage ({user, blog, newPostElement, setNewPostElement}) {
const [posts, setPosts]=useState(null)
const [pageOwner, setPageOwner] = useState(null)
const foundUser = useParams()

const getPosts = async () => {
  try {
    const response = await fetch(`/api/posts/blog/${foundUser.id}`)
    const data = await response.json()
    setPosts(data)
  } catch (error) {
      console.error(error)
  }
}

const getUsername = async() => {
  try {
    const response = await fetch(`/api/blogs/${foundUser.id}`)
    const data = await response.json()
    setPageOwner(data)
  } catch (error) {
    console.error(error)
  }
}

const followUser = async () => {
  const usersFollowed = [...blog.following, pageOwner._id]
  try {
    await fetch(`/api/blogs/${blog._id}`,{
      method: "PUT",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({following: usersFollowed})
    })
    setNewPostElement(!newPostElement)
  } catch (error) {
    console.error(error)
  }
}

const unfollowUser = async () => {
  const newFollowing = [...blog.following]
  const index = blog.following.indexOf(pageOwner._id)
  newFollowing.splice(index, 1)
  try {
    await fetch(`/api/blogs/${blog._id}`,{
      method: "PUT",
      headers:{
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({following: newFollowing})
    })
    setNewPostElement(!newPostElement)
  } catch (error) {
    console.error(error)
  }
}

useEffect(()=>{
  getPosts()
}, [newPostElement])

useEffect(()=>{
  getUsername()
}, [])

  return (
    <div className={styles.postListContainer}>
      <h1 className={styles.postListTitle}>{pageOwner?pageOwner.userName:""}'s Profile</h1>
      
      {pageOwner?(blog._id!=pageOwner._id?(
      blog.following.includes(pageOwner._id)?
      <h2 onClick={unfollowUser} className={styles.unfollowBtn}>Unfollow {pageOwner.username}</h2>
      :
      <h2 onClick={followUser} className={styles.followBtn}>Follow {pageOwner.username}</h2>):""):""}
      <section className={styles.postUserPage}>
        {posts ? posts.map((post) => {
          return <Post key={post._id} blog={blog} post={post} user={user} newPostElement={newPostElement} setNewPostElement={setNewPostElement}/>;
        }): "Nothing here"}
      </section>
  </div>
  )
}