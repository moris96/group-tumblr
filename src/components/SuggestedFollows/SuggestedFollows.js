import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import styles from "../SuggestedFollows/SuggestedFollows.module.scss"

export default function SuggestedFollows () {
  const [blogs, setBlogs] = useState(null)

  const getBlogs = async () => {
    try {
      const response = await fetch(`/api/blogs`)
      const data = await response.json()
      setBlogs(data)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getBlogs()
  }, [])

  /*const handleClick = () => {

  }*/
  

  return (
    <section className={styles.suggestedContainer}>
      <h1 classsName={styles.suggestedTitle}>
        Check out these blogs
      </h1>
      <hr/>
        {blogs ? blogs.slice(0, 5).map((blog) => {
          return (<h4 key={blog.id}>
            <Link to={`/${blog._id}`}>{blog.userName}</Link>
            </h4>)
        }): "No users to show"}
    </section>
  )
}