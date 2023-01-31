import styles from "../SuggestedFollows/SuggestedFollows.module.scss"
import { useState, useEffect } from 'react'

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


  return (
    <section className={styles.suggestedContainer}>
      <h1 classsName={styles.suggestedTitle}>
        Check out these blogs
      </h1>
      <hr/>
        {blogs ? blogs.map((blog) => {
          return <p key={blog.id}>
            {blog.userName}
            </p>
        }): "No users to show"}
    </section>
  )
}